from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_api_v1_licensing_spu_consumption_error import (
    GetApiV1LicensingSpuConsumptionErrorBody,
    get_api_v1_licensing_spu_consumption_error_mapper,
)
from ..models.public_api_spu_consumption_response import PublicApiSpuConsumptionResponse
from ..server.server import Server


class Licensing:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = LicensingWithRawResponse(client, server, auth)

    def get_api_v1_licensing_spu_consumption(
        self,
        *,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiSpuConsumptionResponse:
        """This endpoint returns the number of SPUs your organization consumed over a period.

        Both bounds are inclusive whole days and any time component is discarded:

        - ``from``: Optional. Defaults to the first day of the current calendar month.

        - ``to``: Optional. Defaults to today.

        Only organizations on SPU-based licensing accumulate consumption; others always read zero.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Licensing``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            from_: Value sent with the request.
            to: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_licensing_spu_consumption(
                from_=from_, to=to, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> LicensingWithRawResponse:
        return self._with_raw_response


class AsyncLicensing:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncLicensingWithRawResponse(client, server, auth)

    async def get_api_v1_licensing_spu_consumption(
        self,
        *,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiSpuConsumptionResponse:
        """This endpoint returns the number of SPUs your organization consumed over a period.

        Both bounds are inclusive whole days and any time component is discarded:

        - ``from``: Optional. Defaults to the first day of the current calendar month.

        - ``to``: Optional. Defaults to today.

        Only organizations on SPU-based licensing accumulate consumption; others always read zero.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Licensing``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            from_: Value sent with the request.
            to: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_licensing_spu_consumption(
                from_=from_, to=to, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncLicensingWithRawResponse:
        return self._with_raw_response


class LicensingWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_licensing_spu_consumption(
        self,
        *,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiSpuConsumptionResponse, GetApiV1LicensingSpuConsumptionErrorBody]:
        """This endpoint returns the number of SPUs your organization consumed over a period.

        Both bounds are inclusive whole days and any time component is discarded:

        - ``from``: Optional. Defaults to the first day of the current calendar month.

        - ``to``: Optional. Defaults to today.

        Only organizations on SPU-based licensing accumulate consumption; others always read zero.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Licensing``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            from_: Value sent with the request.
            to: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/licensing/spuConsumption"),
            query_params=[param[RFC3339DateTime | None]("from", from_), param[RFC3339DateTime | None]("to", to)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiSpuConsumptionResponse],
            error_mapper=get_api_v1_licensing_spu_consumption_error_mapper,
            request_options=request_options,
        )


class AsyncLicensingWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_licensing_spu_consumption(
        self,
        *,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiSpuConsumptionResponse, GetApiV1LicensingSpuConsumptionErrorBody]:
        """This endpoint returns the number of SPUs your organization consumed over a period.

        Both bounds are inclusive whole days and any time component is discarded:

        - ``from``: Optional. Defaults to the first day of the current calendar month.

        - ``to``: Optional. Defaults to today.

        Only organizations on SPU-based licensing accumulate consumption; others always read zero.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Licensing``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            from_: Value sent with the request.
            to: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/licensing/spuConsumption"),
            query_params=[param[RFC3339DateTime | None]("from", from_), param[RFC3339DateTime | None]("to", to)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiSpuConsumptionResponse],
            error_mapper=get_api_v1_licensing_spu_consumption_error_mapper,
            request_options=request_options,
        )
