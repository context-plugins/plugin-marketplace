<!-- Generated file — do not edit; regenerated with the SDK. -->

# InternetGateways — operations

Accessor: `client.internetGateways` · Source: `src/resources/internet-gateways.ts` · 2 operations · Request and error types: namespace `InternetGateways`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-vpc`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### attachInternetGateway

- **Signature**: `attachInternetGateway(request: InternetGateways.AttachInternetGatewayRequest, options?: RequestOptions): ApiPromise<undefined, InternetGateways.AttachInternetGatewayError>`
- **Wire**: `GET /?Action=AttachInternetGateway`
- **Auth**: `sigv4Auth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonVpcError` with `kind: "api"`, an instance of `InternetGateways.AttachInternetGatewayError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InternetGateways.AttachInternetGatewayRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `internetGatewayId` | `query` | `InternetGatewayId` | `string` | yes |
| `vpcId` | `query` | `VpcId` | `string` | yes |

### createInternetGateway

- **Signature**: `createInternetGateway(options?: RequestOptions): ApiPromise<undefined, InternetGateways.CreateInternetGatewayError>`
- **Wire**: `GET /?Action=CreateInternetGateway`
- **Auth**: `sigv4Auth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonVpcError` with `kind: "api"`, an instance of `InternetGateways.CreateInternetGatewayError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

