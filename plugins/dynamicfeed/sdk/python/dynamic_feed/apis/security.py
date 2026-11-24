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
from ..errors.package_health_ep_package_health_get_error import (
    PackageHealthEpPackageHealthGetErrorBody,
    package_health_ep_package_health_get_error_mapper,
)
from ..server.server import Server


class Security:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SecurityWithRawResponse(client, server)

    def package_health_ep_package_health_get(
        self,
        package: str,
        *,
        ecosystem: str | None = "npm",
        version: str | None = None,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Package health & security posture from deps.dev (Google Open Source Insights): latest version, license,
        known-advisory count, the OpenSSF Scorecard (0-10 + weakest checks) and popularity. The 'should I depend on
        this?' check — pairs with /advisories/check and /versions. (Requires API key.)

        Args:
            package: package name, e.g. lodash, requests, django
            ecosystem: npm | pypi | go | maven | cargo | nuget | rubygems
            version: exact version (optional; defaults to latest)
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
            self._with_raw_response.package_health_ep_package_health_get(
                package,
                ecosystem=ecosystem,
                version=version,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> SecurityWithRawResponse:
        return self._with_raw_response


class AsyncSecurity:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSecurityWithRawResponse(client, server)

    async def package_health_ep_package_health_get(
        self,
        package: str,
        *,
        ecosystem: str | None = "npm",
        version: str | None = None,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Package health & security posture from deps.dev (Google Open Source Insights): latest version, license,
        known-advisory count, the OpenSSF Scorecard (0-10 + weakest checks) and popularity. The 'should I depend on
        this?' check — pairs with /advisories/check and /versions. (Requires API key.)

        Args:
            package: package name, e.g. lodash, requests, django
            ecosystem: npm | pypi | go | maven | cargo | nuget | rubygems
            version: exact version (optional; defaults to latest)
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
            await self._with_raw_response.package_health_ep_package_health_get(
                package,
                ecosystem=ecosystem,
                version=version,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSecurityWithRawResponse:
        return self._with_raw_response


class SecurityWithRawResponse(BaseRawResponse[RawClient, Server]):
    def package_health_ep_package_health_get(
        self,
        package: str,
        *,
        ecosystem: str | None = "npm",
        version: str | None = None,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, PackageHealthEpPackageHealthGetErrorBody]:
        """Package health & security posture from deps.dev (Google Open Source Insights): latest version, license,
        known-advisory count, the OpenSSF Scorecard (0-10 + weakest checks) and popularity. The 'should I depend on
        this?' check — pairs with /advisories/check and /versions. (Requires API key.)

        Args:
            package: package name, e.g. lodash, requests, django
            ecosystem: npm | pypi | go | maven | cargo | nuget | rubygems
            version: exact version (optional; defaults to latest)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/package-health"),
            query_params=[
                param[str]("package", package),
                param[str | None]("ecosystem", ecosystem),
                param[str | None]("version", version),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=package_health_ep_package_health_get_error_mapper,
            request_options=request_options,
        )


class AsyncSecurityWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def package_health_ep_package_health_get(
        self,
        package: str,
        *,
        ecosystem: str | None = "npm",
        version: str | None = None,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, PackageHealthEpPackageHealthGetErrorBody]:
        """Package health & security posture from deps.dev (Google Open Source Insights): latest version, license,
        known-advisory count, the OpenSSF Scorecard (0-10 + weakest checks) and popularity. The 'should I depend on
        this?' check — pairs with /advisories/check and /versions. (Requires API key.)

        Args:
            package: package name, e.g. lodash, requests, django
            ecosystem: npm | pypi | go | maven | cargo | nuget | rubygems
            version: exact version (optional; defaults to latest)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/package-health"),
            query_params=[
                param[str]("package", package),
                param[str | None]("ecosystem", ecosystem),
                param[str | None]("version", version),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=package_health_ep_package_health_get_error_mapper,
            request_options=request_options,
        )
