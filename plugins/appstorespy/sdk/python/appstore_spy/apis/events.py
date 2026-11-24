from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_events_play_liveops_get_error import (
    GetEventsPlayLiveopsGetErrorBody,
    get_events_play_liveops_get_error_mapper,
)
from ..models.enums.app_countries import AppCountries, AppCountriesOrStr
from ..models.enums.cache_time import CacheTime, CacheTimeOrStr
from ..models.event import Event
from ..server.server import Server


class Events:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EventsWithRawResponse(client, server, auth)

    def get_events_play_liveops_get(
        self,
        app: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        freshness: CacheTimeOrStr | None = CacheTime._7D,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[Event]:
        """Returns the LiveOps events (sales, tournaments, updates, new content) Google Play shows for one app in one
        country. Responds 202 while a fresh crawl is in progress.

        Args:
            app: Value sent with the request.
            country: Value sent with the request.
            freshness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayLiveops401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_events_play_liveops_get(
                app, country=country, freshness=freshness, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> EventsWithRawResponse:
        return self._with_raw_response


class AsyncEvents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEventsWithRawResponse(client, server, auth)

    async def get_events_play_liveops_get(
        self,
        app: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        freshness: CacheTimeOrStr | None = CacheTime._7D,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[Event]:
        """Returns the LiveOps events (sales, tournaments, updates, new content) Google Play shows for one app in one
        country. Responds 202 while a fresh crawl is in progress.

        Args:
            app: Value sent with the request.
            country: Value sent with the request.
            freshness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayLiveops401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_events_play_liveops_get(
                app, country=country, freshness=freshness, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEventsWithRawResponse:
        return self._with_raw_response


class EventsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_events_play_liveops_get(
        self,
        app: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        freshness: CacheTimeOrStr | None = CacheTime._7D,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Event], GetEventsPlayLiveopsGetErrorBody]:
        """Returns the LiveOps events (sales, tournaments, updates, new content) Google Play shows for one app in one
        country. Responds 202 while a fresh crawl is in progress.

        Args:
            app: Value sent with the request.
            country: Value sent with the request.
            freshness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/liveops"),
            query_params=[
                param[str]("app", app),
                param[AppCountriesOrStr | None]("country", country),
                param[CacheTimeOrStr | None]("freshness", freshness),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[list[Event]],
            error_mapper=get_events_play_liveops_get_error_mapper,
            request_options=request_options,
        )


class AsyncEventsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_events_play_liveops_get(
        self,
        app: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        freshness: CacheTimeOrStr | None = CacheTime._7D,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Event], GetEventsPlayLiveopsGetErrorBody]:
        """Returns the LiveOps events (sales, tournaments, updates, new content) Google Play shows for one app in one
        country. Responds 202 while a fresh crawl is in progress.

        Args:
            app: Value sent with the request.
            country: Value sent with the request.
            freshness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/liveops"),
            query_params=[
                param[str]("app", app),
                param[AppCountriesOrStr | None]("country", country),
                param[CacheTimeOrStr | None]("freshness", freshness),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[list[Event]],
            error_mapper=get_events_play_liveops_get_error_mapper,
            request_options=request_options,
        )
