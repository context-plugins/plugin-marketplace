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
from ..errors.advisories_advisories_get_error import (
    AdvisoriesAdvisoriesGetErrorBody,
    advisories_advisories_get_error_mapper,
)
from ..errors.advisories_check_advisories_check_get_error import (
    AdvisoriesCheckAdvisoriesCheckGetErrorBody,
    advisories_check_advisories_check_get_error_mapper,
)
from ..server.server import Server


class Advisories:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AdvisoriesWithRawResponse(client, server)

    def advisories_advisories_get(
        self,
        *,
        q: str | None = None,
        package: str | None = None,
        ecosystem: str | None = None,
        severity: str | None = None,
        min_cvss: float | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Recent security advisories / CVEs — affected package, vulnerable version range, patched version, severity &
        CVSS. Filter by package/ecosystem/severity. Newest first. Pairs with /versions: is my stack current AND safe?
        (Requires API key.)

        Args:
            q: match summary / package / CVE / GHSA id
            package: affected package name, e.g. lodash, requests
            ecosystem: npm | pip | maven | go | rubygems | nuget | composer | ...
            severity: low | moderate | high | critical
            min_cvss: minimum CVSS score (0-10)
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
            self._with_raw_response.advisories_advisories_get(
                q=q,
                package=package,
                ecosystem=ecosystem,
                severity=severity,
                min_cvss=min_cvss,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def advisories_check_advisories_check_get(
        self,
        package: str,
        *,
        version: str | None = None,
        ecosystem: str | None = None,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Is this exact package@version vulnerable? FULL historical lookup across the entire OSV.dev corpus (Google) —
        returns every matching advisory + the versions that fix it. For Maven, pass the full 'group:artifact'
        coordinate; a bare artifact name returns a hint, not a misleading 'not vulnerable'. (Requires API key.)

        Args:
            package: package name, e.g. lodash, requests. Maven needs the full 'group:artifact' coordinate, e.g.
                org.apache.logging.log4j:log4j-core
            version: exact version, e.g. 4.17.10
            ecosystem: npm | pip | maven | go | rubygems | nuget | cargo | composer
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
            self._with_raw_response.advisories_check_advisories_check_get(
                package,
                version=version,
                ecosystem=ecosystem,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AdvisoriesWithRawResponse:
        return self._with_raw_response


class AsyncAdvisories:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAdvisoriesWithRawResponse(client, server)

    async def advisories_advisories_get(
        self,
        *,
        q: str | None = None,
        package: str | None = None,
        ecosystem: str | None = None,
        severity: str | None = None,
        min_cvss: float | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Recent security advisories / CVEs — affected package, vulnerable version range, patched version, severity &
        CVSS. Filter by package/ecosystem/severity. Newest first. Pairs with /versions: is my stack current AND safe?
        (Requires API key.)

        Args:
            q: match summary / package / CVE / GHSA id
            package: affected package name, e.g. lodash, requests
            ecosystem: npm | pip | maven | go | rubygems | nuget | composer | ...
            severity: low | moderate | high | critical
            min_cvss: minimum CVSS score (0-10)
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
            await self._with_raw_response.advisories_advisories_get(
                q=q,
                package=package,
                ecosystem=ecosystem,
                severity=severity,
                min_cvss=min_cvss,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def advisories_check_advisories_check_get(
        self,
        package: str,
        *,
        version: str | None = None,
        ecosystem: str | None = None,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Is this exact package@version vulnerable? FULL historical lookup across the entire OSV.dev corpus (Google) —
        returns every matching advisory + the versions that fix it. For Maven, pass the full 'group:artifact'
        coordinate; a bare artifact name returns a hint, not a misleading 'not vulnerable'. (Requires API key.)

        Args:
            package: package name, e.g. lodash, requests. Maven needs the full 'group:artifact' coordinate, e.g.
                org.apache.logging.log4j:log4j-core
            version: exact version, e.g. 4.17.10
            ecosystem: npm | pip | maven | go | rubygems | nuget | cargo | composer
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
            await self._with_raw_response.advisories_check_advisories_check_get(
                package,
                version=version,
                ecosystem=ecosystem,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAdvisoriesWithRawResponse:
        return self._with_raw_response


class AdvisoriesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def advisories_advisories_get(
        self,
        *,
        q: str | None = None,
        package: str | None = None,
        ecosystem: str | None = None,
        severity: str | None = None,
        min_cvss: float | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, AdvisoriesAdvisoriesGetErrorBody]:
        """Recent security advisories / CVEs — affected package, vulnerable version range, patched version, severity &
        CVSS. Filter by package/ecosystem/severity. Newest first. Pairs with /versions: is my stack current AND safe?
        (Requires API key.)

        Args:
            q: match summary / package / CVE / GHSA id
            package: affected package name, e.g. lodash, requests
            ecosystem: npm | pip | maven | go | rubygems | nuget | composer | ...
            severity: low | moderate | high | critical
            min_cvss: minimum CVSS score (0-10)
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
            url_template=self._server.default("/advisories"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("package", package),
                param[str | None]("ecosystem", ecosystem),
                param[str | None]("severity", severity),
                param[float | None]("min_cvss", min_cvss),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=advisories_advisories_get_error_mapper,
            request_options=request_options,
        )

    def advisories_check_advisories_check_get(
        self,
        package: str,
        *,
        version: str | None = None,
        ecosystem: str | None = None,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, AdvisoriesCheckAdvisoriesCheckGetErrorBody]:
        """Is this exact package@version vulnerable? FULL historical lookup across the entire OSV.dev corpus (Google) —
        returns every matching advisory + the versions that fix it. For Maven, pass the full 'group:artifact'
        coordinate; a bare artifact name returns a hint, not a misleading 'not vulnerable'. (Requires API key.)

        Args:
            package: package name, e.g. lodash, requests. Maven needs the full 'group:artifact' coordinate, e.g.
                org.apache.logging.log4j:log4j-core
            version: exact version, e.g. 4.17.10
            ecosystem: npm | pip | maven | go | rubygems | nuget | cargo | composer
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/advisories/check"),
            query_params=[
                param[str]("package", package),
                param[str | None]("version", version),
                param[str | None]("ecosystem", ecosystem),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=advisories_check_advisories_check_get_error_mapper,
            request_options=request_options,
        )


class AsyncAdvisoriesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def advisories_advisories_get(
        self,
        *,
        q: str | None = None,
        package: str | None = None,
        ecosystem: str | None = None,
        severity: str | None = None,
        min_cvss: float | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, AdvisoriesAdvisoriesGetErrorBody]:
        """Recent security advisories / CVEs — affected package, vulnerable version range, patched version, severity &
        CVSS. Filter by package/ecosystem/severity. Newest first. Pairs with /versions: is my stack current AND safe?
        (Requires API key.)

        Args:
            q: match summary / package / CVE / GHSA id
            package: affected package name, e.g. lodash, requests
            ecosystem: npm | pip | maven | go | rubygems | nuget | composer | ...
            severity: low | moderate | high | critical
            min_cvss: minimum CVSS score (0-10)
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
            url_template=self._server.default("/advisories"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("package", package),
                param[str | None]("ecosystem", ecosystem),
                param[str | None]("severity", severity),
                param[float | None]("min_cvss", min_cvss),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=advisories_advisories_get_error_mapper,
            request_options=request_options,
        )

    async def advisories_check_advisories_check_get(
        self,
        package: str,
        *,
        version: str | None = None,
        ecosystem: str | None = None,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, AdvisoriesCheckAdvisoriesCheckGetErrorBody]:
        """Is this exact package@version vulnerable? FULL historical lookup across the entire OSV.dev corpus (Google) —
        returns every matching advisory + the versions that fix it. For Maven, pass the full 'group:artifact'
        coordinate; a bare artifact name returns a hint, not a misleading 'not vulnerable'. (Requires API key.)

        Args:
            package: package name, e.g. lodash, requests. Maven needs the full 'group:artifact' coordinate, e.g.
                org.apache.logging.log4j:log4j-core
            version: exact version, e.g. 4.17.10
            ecosystem: npm | pip | maven | go | rubygems | nuget | cargo | composer
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/advisories/check"),
            query_params=[
                param[str]("package", package),
                param[str | None]("version", version),
                param[str | None]("ecosystem", ecosystem),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=advisories_check_advisories_check_get_error_mapper,
            request_options=request_options,
        )
