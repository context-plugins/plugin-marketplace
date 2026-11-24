from __future__ import annotations

from typing import Any

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.enums.device import DeviceOrStr
from ..models.enums.output import OutputOrStr
from ..server.server import Server


class Search:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SearchWithRawResponse(client, server, auth)

    def get_search(self, search_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Retrieves the JSON results for an asynchronous search by its ``search_id``. The ``search_id`` is returned by
        /search when ``async=true``.

        Args:
            search_id: Identifier of the asynchronous search.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search result payload

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_search(search_id, request_options=request_options))

    def run_search(
        self,
        engine: str,
        *,
        q: str | None = None,
        search_query: str | None = None,
        api_key: str | None = None,
        location: str | None = None,
        gl: str | None = None,
        hl: str | None = None,
        device: DeviceOrStr | None = None,
        no_cache: bool | None = None,
        async_: bool | None = None,
        output: OutputOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Runs a real-time search against the engine specified by the ``engine`` query parameter. Supports Google,
        Bing, YouTube, and many other engines. Engine-specific parameters are documented in the SerpApi engine
        reference.

        Args:
            engine: Search engine identifier (e.g. google, bing, youtube).
            q: Search query (used by most engines except YouTube).
            search_query: Search query used by the YouTube engine.
            api_key: SerpApi private key (may also be supplied via the apiKey security scheme).
            location: Geographic origin for the search.
            gl: Two-letter country code.
            hl: Two-letter language code.
            device: Device type to emulate.
            no_cache: Force fresh (uncached) results.
            async_: Submit asynchronously and retrieve results later.
            output: Response format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search results

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.run_search(
                engine,
                q=q,
                search_query=search_query,
                api_key=api_key,
                location=location,
                gl=gl,
                hl=hl,
                device=device,
                no_cache=no_cache,
                async_=async_,
                output=output,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> SearchWithRawResponse:
        return self._with_raw_response


class AsyncSearch:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSearchWithRawResponse(client, server, auth)

    async def get_search(self, search_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Retrieves the JSON results for an asynchronous search by its ``search_id``. The ``search_id`` is returned by
        /search when ``async=true``.

        Args:
            search_id: Identifier of the asynchronous search.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search result payload

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_search(search_id, request_options=request_options))

    async def run_search(
        self,
        engine: str,
        *,
        q: str | None = None,
        search_query: str | None = None,
        api_key: str | None = None,
        location: str | None = None,
        gl: str | None = None,
        hl: str | None = None,
        device: DeviceOrStr | None = None,
        no_cache: bool | None = None,
        async_: bool | None = None,
        output: OutputOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Runs a real-time search against the engine specified by the ``engine`` query parameter. Supports Google,
        Bing, YouTube, and many other engines. Engine-specific parameters are documented in the SerpApi engine
        reference.

        Args:
            engine: Search engine identifier (e.g. google, bing, youtube).
            q: Search query (used by most engines except YouTube).
            search_query: Search query used by the YouTube engine.
            api_key: SerpApi private key (may also be supplied via the apiKey security scheme).
            location: Geographic origin for the search.
            gl: Two-letter country code.
            hl: Two-letter language code.
            device: Device type to emulate.
            no_cache: Force fresh (uncached) results.
            async_: Submit asynchronously and retrieve results later.
            output: Response format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search results

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.run_search(
                engine,
                q=q,
                search_query=search_query,
                api_key=api_key,
                location=location,
                gl=gl,
                hl=hl,
                device=device,
                no_cache=no_cache,
                async_=async_,
                output=output,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSearchWithRawResponse:
        return self._with_raw_response


class SearchWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_search(
        self, search_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Retrieves the JSON results for an asynchronous search by its ``search_id``. The ``search_id`` is returned by
        /search when ``async=true``.

        Args:
            search_id: Identifier of the asynchronous search.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/searches/{search_id}"),
            path_params=[param[str]("search_id", search_id)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def run_search(
        self,
        engine: str,
        *,
        q: str | None = None,
        search_query: str | None = None,
        api_key: str | None = None,
        location: str | None = None,
        gl: str | None = None,
        hl: str | None = None,
        device: DeviceOrStr | None = None,
        no_cache: bool | None = None,
        async_: bool | None = None,
        output: OutputOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, RawError]:
        """Runs a real-time search against the engine specified by the ``engine`` query parameter. Supports Google,
        Bing, YouTube, and many other engines. Engine-specific parameters are documented in the SerpApi engine
        reference.

        Args:
            engine: Search engine identifier (e.g. google, bing, youtube).
            q: Search query (used by most engines except YouTube).
            search_query: Search query used by the YouTube engine.
            api_key: SerpApi private key (may also be supplied via the apiKey security scheme).
            location: Geographic origin for the search.
            gl: Two-letter country code.
            hl: Two-letter language code.
            device: Device type to emulate.
            no_cache: Force fresh (uncached) results.
            async_: Submit asynchronously and retrieve results later.
            output: Response format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/search"),
            query_params=[
                param[str]("engine", engine),
                param[str | None]("q", q),
                param[str | None]("search_query", search_query),
                param[str | None]("api_key", api_key),
                param[str | None]("location", location),
                param[str | None]("gl", gl),
                param[str | None]("hl", hl),
                param[DeviceOrStr | None]("device", device),
                param[bool | None]("no_cache", no_cache),
                param[bool | None]("async", async_),
                param[OutputOrStr | None]("output", output),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncSearchWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_search(
        self, search_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Retrieves the JSON results for an asynchronous search by its ``search_id``. The ``search_id`` is returned by
        /search when ``async=true``.

        Args:
            search_id: Identifier of the asynchronous search.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/searches/{search_id}"),
            path_params=[param[str]("search_id", search_id)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def run_search(
        self,
        engine: str,
        *,
        q: str | None = None,
        search_query: str | None = None,
        api_key: str | None = None,
        location: str | None = None,
        gl: str | None = None,
        hl: str | None = None,
        device: DeviceOrStr | None = None,
        no_cache: bool | None = None,
        async_: bool | None = None,
        output: OutputOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, RawError]:
        """Runs a real-time search against the engine specified by the ``engine`` query parameter. Supports Google,
        Bing, YouTube, and many other engines. Engine-specific parameters are documented in the SerpApi engine
        reference.

        Args:
            engine: Search engine identifier (e.g. google, bing, youtube).
            q: Search query (used by most engines except YouTube).
            search_query: Search query used by the YouTube engine.
            api_key: SerpApi private key (may also be supplied via the apiKey security scheme).
            location: Geographic origin for the search.
            gl: Two-letter country code.
            hl: Two-letter language code.
            device: Device type to emulate.
            no_cache: Force fresh (uncached) results.
            async_: Submit asynchronously and retrieve results later.
            output: Response format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/search"),
            query_params=[
                param[str]("engine", engine),
                param[str | None]("q", q),
                param[str | None]("search_query", search_query),
                param[str | None]("api_key", api_key),
                param[str | None]("location", location),
                param[str | None]("gl", gl),
                param[str | None]("hl", hl),
                param[DeviceOrStr | None]("device", device),
                param[bool | None]("no_cache", no_cache),
                param[bool | None]("async", async_),
                param[OutputOrStr | None]("output", output),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
