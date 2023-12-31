import { app } from "../../projects/request-header-parser/src/app";

import { AddressInfo } from "net";

export const listener = app.listen(process.env.PORT || 3000, () => {
  const address = listener.address() as AddressInfo;
  console.log("App is listening on port " + address.port);
});
