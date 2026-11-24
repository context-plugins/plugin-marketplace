from __future__ import annotations

from typing import Any

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.shipping_ep_shipping_get_error import (
    ShippingEpShippingGetErrorBody,
    shipping_ep_shipping_get_error_mapper,
)
from ..server.server import Server


class Shipping:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ShippingWithRawResponse(client, server)

    def shipping_ep_shipping_get(
        self,
        *,
        scope: str | None = "chokepoints",
        query: str | None = "",
        region: str | None = "baltic",
        limit: int | None = 30,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Global shipping & maritime: daily ship transits through the world's 28 chokepoints (Suez, Panama, Hormuz,
        Malacca, Taiwan...) via IMF PortWatch, the ~2,065-port global registry, and LIVE Baltic vessel positions (AIS,
        Digitraffic) enriched with ship name/type/destination. (Requires API key.)

        Args:
            scope: chokepoints | ports | vessels
            query: filter by name/country (chokepoints, ports) or ship name/destination (vessels)
            region: Baltic preset for scope=vessels: baltic, helsinki, stockholm, kiel, gdansk, copenhagen, riga,
                gulf-of-finland
            limit: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.shipping_ep_shipping_get(
                scope=scope,
                query=query,
                region=region,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ShippingWithRawResponse:
        return self._with_raw_response


class AsyncShipping:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncShippingWithRawResponse(client, server)

    async def shipping_ep_shipping_get(
        self,
        *,
        scope: str | None = "chokepoints",
        query: str | None = "",
        region: str | None = "baltic",
        limit: int | None = 30,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Global shipping & maritime: daily ship transits through the world's 28 chokepoints (Suez, Panama, Hormuz,
        Malacca, Taiwan...) via IMF PortWatch, the ~2,065-port global registry, and LIVE Baltic vessel positions (AIS,
        Digitraffic) enriched with ship name/type/destination. (Requires API key.)

        Args:
            scope: chokepoints | ports | vessels
            query: filter by name/country (chokepoints, ports) or ship name/destination (vessels)
            region: Baltic preset for scope=vessels: baltic, helsinki, stockholm, kiel, gdansk, copenhagen, riga,
                gulf-of-finland
            limit: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.shipping_ep_shipping_get(
                scope=scope,
                query=query,
                region=region,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncShippingWithRawResponse:
        return self._with_raw_response


class ShippingWithRawResponse(BaseRawResponse[RawClient, Server]):
    def shipping_ep_shipping_get(
        self,
        *,
        scope: str | None = "chokepoints",
        query: str | None = "",
        region: str | None = "baltic",
        limit: int | None = 30,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ShippingEpShippingGetErrorBody]:
        """Global shipping & maritime: daily ship transits through the world's 28 chokepoints (Suez, Panama, Hormuz,
        Malacca, Taiwan...) via IMF PortWatch, the ~2,065-port global registry, and LIVE Baltic vessel positions (AIS,
        Digitraffic) enriched with ship name/type/destination. (Requires API key.)

        Args:
            scope: chokepoints | ports | vessels
            query: filter by name/country (chokepoints, ports) or ship name/destination (vessels)
            region: Baltic preset for scope=vessels: baltic, helsinki, stockholm, kiel, gdansk, copenhagen, riga,
                gulf-of-finland
            limit: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/shipping"),
            query_params=[
                param[str | None]("scope", scope),
                param[str | None]("query", query),
                param[str | None]("region", region),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=shipping_ep_shipping_get_error_mapper,
            request_options=request_options,
        )


class AsyncShippingWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def shipping_ep_shipping_get(
        self,
        *,
        scope: str | None = "chokepoints",
        query: str | None = "",
        region: str | None = "baltic",
        limit: int | None = 30,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ShippingEpShippingGetErrorBody]:
        """Global shipping & maritime: daily ship transits through the world's 28 chokepoints (Suez, Panama, Hormuz,
        Malacca, Taiwan...) via IMF PortWatch, the ~2,065-port global registry, and LIVE Baltic vessel positions (AIS,
        Digitraffic) enriched with ship name/type/destination. (Requires API key.)

        Args:
            scope: chokepoints | ports | vessels
            query: filter by name/country (chokepoints, ports) or ship name/destination (vessels)
            region: Baltic preset for scope=vessels: baltic, helsinki, stockholm, kiel, gdansk, copenhagen, riga,
                gulf-of-finland
            limit: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/shipping"),
            query_params=[
                param[str | None]("scope", scope),
                param[str | None]("query", query),
                param[str | None]("region", region),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=shipping_ep_shipping_get_error_mapper,
            request_options=request_options,
        )
