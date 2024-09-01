import { useQuery } from "@tanstack/react-query";

import Screenshot from "../entities/Screenshot";
import APIClient from "../services/api-client";

const useScreenshots = (gameId: number) => {
  const apiClinet = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClinet.getAll,
  });
};

export default useScreenshots;
