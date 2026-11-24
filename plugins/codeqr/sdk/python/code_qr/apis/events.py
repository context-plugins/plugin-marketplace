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
from ..errors.list_events_error import ListEventsErrorBody, list_events_error_mapper
from ..models.enums.continent_code import ContinentCodeOrStr
from ..models.enums.country_code import CountryCodeOrStr
from ..models.enums.event_codeqr_io_events_api import EventCodeqrIoEventsApi, EventCodeqrIoEventsApiOrStr
from ..models.enums.interval_codeqr_io_events_api import IntervalCodeqrIoEventsApi, IntervalCodeqrIoEventsApiOrStr
from ..models.enums.order import Order, OrderOrStr
from ..models.enums.sort_by import SortBy, SortByOrStr
from ..models.unions.events_response import EventsResponse
from ..server.server import Server


class Events:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EventsWithRawResponse(client, server, auth)

    def list_events(
        self,
        *,
        event: EventCodeqrIoEventsApiOrStr | None = EventCodeqrIoEventsApi.CLICKS,
        domain: str | None = None,
        key: str | None = None,
        link_id: str | None = None,
        qrcode_id: str | None = None,
        page_id: str | None = None,
        external_id: str | None = None,
        interval: IntervalCodeqrIoEventsApiOrStr | None = IntervalCodeqrIoEventsApi._24H,
        start: str | None = None,
        end: str | None = None,
        timezone: str | None = "UTC",
        continent: ContinentCodeOrStr | None = None,
        country: CountryCodeOrStr | None = None,
        city: str | None = None,
        device: str | None = None,
        browser: str | None = None,
        os: str | None = None,
        referer: str | None = None,
        url: str | None = None,
        exclude_root: bool | None = None,
        root: bool | None = None,
        tag_id: str | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        type_: str | None = None,
        types: str | None = None,
        page: float | None = 1.0,
        limit: float | None = 100.0,
        order: OrderOrStr | None = Order.DESC,
        sort_by: SortByOrStr | None = SortBy.TIMESTAMP,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[EventsResponse]:
        """Retrieve a paginated list of events for the authenticated workspace.

        Args:
            event: The type of event to retrieve analytics for. Defaults to 'clicks'.
            domain: The domain of the short link.
            key: The short link slug.
            link_id: The unique ID of the short link on CodeQR.
            qrcode_id: The unique ID of the QR code on CodeQR.
            page_id: The unique ID of the page on CodeQR.
            external_id: This is the ID of the link in the your database. Must be prefixed with 'ext_' when passed as a
                query parameter.
            interval: The interval to retrieve events for. Takes precedence over start and end. If undefined, defaults
                to 24h.
            start: The start date and time when to retrieve analytics from.
            end: The end date and time when to retrieve analytics from. If not provided, defaults to the current date.
            timezone: The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to
                UTC.
            continent: The continent to retrieve analytics for.
            country: The country to retrieve analytics for.
            city: The city to retrieve analytics for.
            device: The device to retrieve analytics for.
            browser: The browser to retrieve analytics for.
            os: The OS to retrieve analytics for.
            referer: The referer to retrieve analytics for.
            url: The URL to retrieve analytics for.
            exclude_root: Whether to exclude the root link from the response.
            root: Filter for root domains. If true, filter for domains only. If false, filter for links only. If
                undefined, return both.
            tag_id: The tag ID to retrieve analytics for.
            utm_source: UTM source to filter analytics by.
            utm_medium: UTM medium to filter analytics by.
            utm_campaign: UTM campaign to filter analytics by.
            utm_content: UTM content to filter analytics by.
            utm_term: UTM term to filter analytics by.
            type_: The type of analytics to retrieve.
            types: The types of analytics to retrieve.
            page: Value sent with the request.
            limit: Value sent with the request.
            order: Value sent with the request.
            sort_by: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of events

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            self._with_raw_response.list_events(
                event=event,
                domain=domain,
                key=key,
                link_id=link_id,
                qrcode_id=qrcode_id,
                page_id=page_id,
                external_id=external_id,
                interval=interval,
                start=start,
                end=end,
                timezone=timezone,
                continent=continent,
                country=country,
                city=city,
                device=device,
                browser=browser,
                os=os,
                referer=referer,
                url=url,
                exclude_root=exclude_root,
                root=root,
                tag_id=tag_id,
                utm_source=utm_source,
                utm_medium=utm_medium,
                utm_campaign=utm_campaign,
                utm_content=utm_content,
                utm_term=utm_term,
                type_=type_,
                types=types,
                page=page,
                limit=limit,
                order=order,
                sort_by=sort_by,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> EventsWithRawResponse:
        return self._with_raw_response


class AsyncEvents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEventsWithRawResponse(client, server, auth)

    async def list_events(
        self,
        *,
        event: EventCodeqrIoEventsApiOrStr | None = EventCodeqrIoEventsApi.CLICKS,
        domain: str | None = None,
        key: str | None = None,
        link_id: str | None = None,
        qrcode_id: str | None = None,
        page_id: str | None = None,
        external_id: str | None = None,
        interval: IntervalCodeqrIoEventsApiOrStr | None = IntervalCodeqrIoEventsApi._24H,
        start: str | None = None,
        end: str | None = None,
        timezone: str | None = "UTC",
        continent: ContinentCodeOrStr | None = None,
        country: CountryCodeOrStr | None = None,
        city: str | None = None,
        device: str | None = None,
        browser: str | None = None,
        os: str | None = None,
        referer: str | None = None,
        url: str | None = None,
        exclude_root: bool | None = None,
        root: bool | None = None,
        tag_id: str | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        type_: str | None = None,
        types: str | None = None,
        page: float | None = 1.0,
        limit: float | None = 100.0,
        order: OrderOrStr | None = Order.DESC,
        sort_by: SortByOrStr | None = SortBy.TIMESTAMP,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[EventsResponse]:
        """Retrieve a paginated list of events for the authenticated workspace.

        Args:
            event: The type of event to retrieve analytics for. Defaults to 'clicks'.
            domain: The domain of the short link.
            key: The short link slug.
            link_id: The unique ID of the short link on CodeQR.
            qrcode_id: The unique ID of the QR code on CodeQR.
            page_id: The unique ID of the page on CodeQR.
            external_id: This is the ID of the link in the your database. Must be prefixed with 'ext_' when passed as a
                query parameter.
            interval: The interval to retrieve events for. Takes precedence over start and end. If undefined, defaults
                to 24h.
            start: The start date and time when to retrieve analytics from.
            end: The end date and time when to retrieve analytics from. If not provided, defaults to the current date.
            timezone: The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to
                UTC.
            continent: The continent to retrieve analytics for.
            country: The country to retrieve analytics for.
            city: The city to retrieve analytics for.
            device: The device to retrieve analytics for.
            browser: The browser to retrieve analytics for.
            os: The OS to retrieve analytics for.
            referer: The referer to retrieve analytics for.
            url: The URL to retrieve analytics for.
            exclude_root: Whether to exclude the root link from the response.
            root: Filter for root domains. If true, filter for domains only. If false, filter for links only. If
                undefined, return both.
            tag_id: The tag ID to retrieve analytics for.
            utm_source: UTM source to filter analytics by.
            utm_medium: UTM medium to filter analytics by.
            utm_campaign: UTM campaign to filter analytics by.
            utm_content: UTM content to filter analytics by.
            utm_term: UTM term to filter analytics by.
            type_: The type of analytics to retrieve.
            types: The types of analytics to retrieve.
            page: Value sent with the request.
            limit: Value sent with the request.
            order: Value sent with the request.
            sort_by: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of events

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            await self._with_raw_response.list_events(
                event=event,
                domain=domain,
                key=key,
                link_id=link_id,
                qrcode_id=qrcode_id,
                page_id=page_id,
                external_id=external_id,
                interval=interval,
                start=start,
                end=end,
                timezone=timezone,
                continent=continent,
                country=country,
                city=city,
                device=device,
                browser=browser,
                os=os,
                referer=referer,
                url=url,
                exclude_root=exclude_root,
                root=root,
                tag_id=tag_id,
                utm_source=utm_source,
                utm_medium=utm_medium,
                utm_campaign=utm_campaign,
                utm_content=utm_content,
                utm_term=utm_term,
                type_=type_,
                types=types,
                page=page,
                limit=limit,
                order=order,
                sort_by=sort_by,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEventsWithRawResponse:
        return self._with_raw_response


class EventsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_events(
        self,
        *,
        event: EventCodeqrIoEventsApiOrStr | None = EventCodeqrIoEventsApi.CLICKS,
        domain: str | None = None,
        key: str | None = None,
        link_id: str | None = None,
        qrcode_id: str | None = None,
        page_id: str | None = None,
        external_id: str | None = None,
        interval: IntervalCodeqrIoEventsApiOrStr | None = IntervalCodeqrIoEventsApi._24H,
        start: str | None = None,
        end: str | None = None,
        timezone: str | None = "UTC",
        continent: ContinentCodeOrStr | None = None,
        country: CountryCodeOrStr | None = None,
        city: str | None = None,
        device: str | None = None,
        browser: str | None = None,
        os: str | None = None,
        referer: str | None = None,
        url: str | None = None,
        exclude_root: bool | None = None,
        root: bool | None = None,
        tag_id: str | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        type_: str | None = None,
        types: str | None = None,
        page: float | None = 1.0,
        limit: float | None = 100.0,
        order: OrderOrStr | None = Order.DESC,
        sort_by: SortByOrStr | None = SortBy.TIMESTAMP,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[EventsResponse], ListEventsErrorBody]:
        """Retrieve a paginated list of events for the authenticated workspace.

        Args:
            event: The type of event to retrieve analytics for. Defaults to 'clicks'.
            domain: The domain of the short link.
            key: The short link slug.
            link_id: The unique ID of the short link on CodeQR.
            qrcode_id: The unique ID of the QR code on CodeQR.
            page_id: The unique ID of the page on CodeQR.
            external_id: This is the ID of the link in the your database. Must be prefixed with 'ext_' when passed as a
                query parameter.
            interval: The interval to retrieve events for. Takes precedence over start and end. If undefined, defaults
                to 24h.
            start: The start date and time when to retrieve analytics from.
            end: The end date and time when to retrieve analytics from. If not provided, defaults to the current date.
            timezone: The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to
                UTC.
            continent: The continent to retrieve analytics for.
            country: The country to retrieve analytics for.
            city: The city to retrieve analytics for.
            device: The device to retrieve analytics for.
            browser: The browser to retrieve analytics for.
            os: The OS to retrieve analytics for.
            referer: The referer to retrieve analytics for.
            url: The URL to retrieve analytics for.
            exclude_root: Whether to exclude the root link from the response.
            root: Filter for root domains. If true, filter for domains only. If false, filter for links only. If
                undefined, return both.
            tag_id: The tag ID to retrieve analytics for.
            utm_source: UTM source to filter analytics by.
            utm_medium: UTM medium to filter analytics by.
            utm_campaign: UTM campaign to filter analytics by.
            utm_content: UTM content to filter analytics by.
            utm_term: UTM term to filter analytics by.
            type_: The type of analytics to retrieve.
            types: The types of analytics to retrieve.
            page: Value sent with the request.
            limit: Value sent with the request.
            order: Value sent with the request.
            sort_by: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/events"),
            query_params=[
                param[EventCodeqrIoEventsApiOrStr | None]("event", event),
                param[str | None]("domain", domain),
                param[str | None]("key", key),
                param[str | None]("linkId", link_id),
                param[str | None]("qrcodeId", qrcode_id),
                param[str | None]("pageId", page_id),
                param[str | None]("externalId", external_id),
                param[IntervalCodeqrIoEventsApiOrStr | None]("interval", interval),
                param[str | None]("start", start),
                param[str | None]("end", end),
                param[str | None]("timezone", timezone),
                param[ContinentCodeOrStr | None]("continent", continent),
                param[CountryCodeOrStr | None]("country", country),
                param[str | None]("city", city),
                param[str | None]("device", device),
                param[str | None]("browser", browser),
                param[str | None]("os", os),
                param[str | None]("referer", referer),
                param[str | None]("url", url),
                param[bool | None]("excludeRoot", exclude_root),
                param[bool | None]("root", root),
                param[str | None]("tagId", tag_id),
                param[str | None]("utm_source", utm_source),
                param[str | None]("utm_medium", utm_medium),
                param[str | None]("utm_campaign", utm_campaign),
                param[str | None]("utm_content", utm_content),
                param[str | None]("utm_term", utm_term),
                param[str | None]("type", type_),
                param[str | None]("types", types),
                param[float | None]("page", page),
                param[float | None]("limit", limit),
                param[OrderOrStr | None]("order", order),
                param[SortByOrStr | None]("sortBy", sort_by),
            ],
            auth_scheme=self._auth.token,
            decoder=json_decoder[list[EventsResponse]],
            error_mapper=list_events_error_mapper,
            request_options=request_options,
        )


class AsyncEventsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_events(
        self,
        *,
        event: EventCodeqrIoEventsApiOrStr | None = EventCodeqrIoEventsApi.CLICKS,
        domain: str | None = None,
        key: str | None = None,
        link_id: str | None = None,
        qrcode_id: str | None = None,
        page_id: str | None = None,
        external_id: str | None = None,
        interval: IntervalCodeqrIoEventsApiOrStr | None = IntervalCodeqrIoEventsApi._24H,
        start: str | None = None,
        end: str | None = None,
        timezone: str | None = "UTC",
        continent: ContinentCodeOrStr | None = None,
        country: CountryCodeOrStr | None = None,
        city: str | None = None,
        device: str | None = None,
        browser: str | None = None,
        os: str | None = None,
        referer: str | None = None,
        url: str | None = None,
        exclude_root: bool | None = None,
        root: bool | None = None,
        tag_id: str | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        type_: str | None = None,
        types: str | None = None,
        page: float | None = 1.0,
        limit: float | None = 100.0,
        order: OrderOrStr | None = Order.DESC,
        sort_by: SortByOrStr | None = SortBy.TIMESTAMP,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[EventsResponse], ListEventsErrorBody]:
        """Retrieve a paginated list of events for the authenticated workspace.

        Args:
            event: The type of event to retrieve analytics for. Defaults to 'clicks'.
            domain: The domain of the short link.
            key: The short link slug.
            link_id: The unique ID of the short link on CodeQR.
            qrcode_id: The unique ID of the QR code on CodeQR.
            page_id: The unique ID of the page on CodeQR.
            external_id: This is the ID of the link in the your database. Must be prefixed with 'ext_' when passed as a
                query parameter.
            interval: The interval to retrieve events for. Takes precedence over start and end. If undefined, defaults
                to 24h.
            start: The start date and time when to retrieve analytics from.
            end: The end date and time when to retrieve analytics from. If not provided, defaults to the current date.
            timezone: The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to
                UTC.
            continent: The continent to retrieve analytics for.
            country: The country to retrieve analytics for.
            city: The city to retrieve analytics for.
            device: The device to retrieve analytics for.
            browser: The browser to retrieve analytics for.
            os: The OS to retrieve analytics for.
            referer: The referer to retrieve analytics for.
            url: The URL to retrieve analytics for.
            exclude_root: Whether to exclude the root link from the response.
            root: Filter for root domains. If true, filter for domains only. If false, filter for links only. If
                undefined, return both.
            tag_id: The tag ID to retrieve analytics for.
            utm_source: UTM source to filter analytics by.
            utm_medium: UTM medium to filter analytics by.
            utm_campaign: UTM campaign to filter analytics by.
            utm_content: UTM content to filter analytics by.
            utm_term: UTM term to filter analytics by.
            type_: The type of analytics to retrieve.
            types: The types of analytics to retrieve.
            page: Value sent with the request.
            limit: Value sent with the request.
            order: Value sent with the request.
            sort_by: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/events"),
            query_params=[
                param[EventCodeqrIoEventsApiOrStr | None]("event", event),
                param[str | None]("domain", domain),
                param[str | None]("key", key),
                param[str | None]("linkId", link_id),
                param[str | None]("qrcodeId", qrcode_id),
                param[str | None]("pageId", page_id),
                param[str | None]("externalId", external_id),
                param[IntervalCodeqrIoEventsApiOrStr | None]("interval", interval),
                param[str | None]("start", start),
                param[str | None]("end", end),
                param[str | None]("timezone", timezone),
                param[ContinentCodeOrStr | None]("continent", continent),
                param[CountryCodeOrStr | None]("country", country),
                param[str | None]("city", city),
                param[str | None]("device", device),
                param[str | None]("browser", browser),
                param[str | None]("os", os),
                param[str | None]("referer", referer),
                param[str | None]("url", url),
                param[bool | None]("excludeRoot", exclude_root),
                param[bool | None]("root", root),
                param[str | None]("tagId", tag_id),
                param[str | None]("utm_source", utm_source),
                param[str | None]("utm_medium", utm_medium),
                param[str | None]("utm_campaign", utm_campaign),
                param[str | None]("utm_content", utm_content),
                param[str | None]("utm_term", utm_term),
                param[str | None]("type", type_),
                param[str | None]("types", types),
                param[float | None]("page", page),
                param[float | None]("limit", limit),
                param[OrderOrStr | None]("order", order),
                param[SortByOrStr | None]("sortBy", sort_by),
            ],
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[list[EventsResponse]],
            error_mapper=list_events_error_mapper,
            request_options=request_options,
        )
