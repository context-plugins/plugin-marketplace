from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.add_ticket_tags_error import AddTicketTagsErrorBody, add_ticket_tags_error_mapper
from ..errors.create_ticket_comment_error import CreateTicketCommentErrorBody, create_ticket_comment_error_mapper
from ..errors.create_ticket_error import CreateTicketErrorBody, create_ticket_error_mapper
from ..errors.get_ticket_error import GetTicketErrorBody, get_ticket_error_mapper
from ..errors.list_ticket_comments_error import ListTicketCommentsErrorBody, list_ticket_comments_error_mapper
from ..errors.list_ticket_tags_error import ListTicketTagsErrorBody, list_ticket_tags_error_mapper
from ..errors.list_tickets_error import ListTicketsErrorBody, list_tickets_error_mapper
from ..errors.remove_ticket_tags_error import RemoveTicketTagsErrorBody, remove_ticket_tags_error_mapper
from ..errors.update_ticket_error import UpdateTicketErrorBody, update_ticket_error_mapper
from ..models.comment_ext_api import CommentExtApi
from ..models.comments_response_ext_api import CommentsResponseExtApi
from ..models.create_comment_request import CreateCommentRequest, CreateCommentRequestDict
from ..models.support_v1_tickets_request import SupportV1TicketsRequest, SupportV1TicketsRequestDict
from ..models.support_v1_tickets_response import SupportV1TicketsResponse
from ..models.tags_get_response import TagsGetResponse
from ..models.tags_request import TagsRequest, TagsRequestDict
from ..models.tags_response import TagsResponse
from ..models.ticket_create_form_ext_api import TicketCreateFormExtApi, TicketCreateFormExtApiDict
from ..models.ticket_detail_ext_api import TicketDetailExtApi
from ..models.ticket_response_ext_api import TicketResponseExtApi
from ..models.tickets_list import TicketsList
from ..server.server import Server


class SupportRequests:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SupportRequestsWithRawResponse(client, server, auth)

    def add_ticket_tags(
        self,
        ticket_id: int,
        body: TagsRequest | TagsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TagsResponse:
        """Adds one or more tags to an existing support request. The operation is surgical — only the tags listed in the
        request are added; existing tags on the ticket are preserved. Re-adding a tag that is already present is a
        successful no-op.

        All submitted tags are normalized (trim + lowercase) before storage. For customers, the system additionally
        applies a ``customer_tag/`` namespace prefix to prevent collisions with internal DoiT process tags. The response
        echoes the actual stored strings so callers can verify the transform.

        Args:
            ticket_id: The unique identifier of the support request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Tags added (or already present).

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.add_ticket_tags(ticket_id, body, request_options=request_options))

    def create_ticket(
        self,
        body: TicketCreateFormExtApi | TicketCreateFormExtApiDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TicketResponseExtApi:
        """Creates a new support request

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - New support request created.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_ticket(body, request_options=request_options))

    def create_ticket_comment(
        self,
        ticket_id: int,
        body: CreateCommentRequest | CreateCommentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CommentExtApi:
        """Adds a comment to an existing support request. For customers and service-account callers, comments are always
        public, even when ``private`` is ``true``. Callers authenticated with DoiT employee privileges can create
        private internal notes by setting ``private`` to ``true``. The response always includes ``public``, reflecting
        the effective visibility after these rules are applied, not merely the requested privacy. Existing
        authentication and ticket authorization are unchanged.

        Args:
            ticket_id: The unique identifier of the support request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - Comment added to the support request.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_ticket_comment(ticket_id, body, request_options=request_options))

    def get_ticket(self, ticket_id: int, *, request_options: RequestOptionsOrDict | None = None) -> TicketDetailExtApi:
        """Returns the details of a single support request by its ID.

        Args:
            ticket_id: The unique identifier of the support request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Support request details returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Bad Gateway - The upstream support system returned an
                error that a retry will not resolve (e.g. an authentication or configuration problem). Escalation is
                required. Service Unavailable - The upstream support system is temporarily unavailable (rate limited,
                upstream 5xx, or a network error). Retry after the interval indicated by the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_ticket(ticket_id, request_options=request_options))

    def list_ticket_comments(
        self, ticket_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> CommentsResponseExtApi:
        """Returns all permitted comments on a support request. Customers and service-account callers receive only
        public comments; private comment bodies and attachments are excluded. Callers authenticated with DoiT employee
        privileges receive both public and private comments, subject to existing ticket authorization. Each comment
        includes ``public``, sourced from Zendesk: ``true`` means public and ``false`` means private (internal). Missing
        visibility in legacy responses or snapshots means unknown, not private. All comments are returned in a single
        response (no pagination).

        Args:
            ticket_id: The unique identifier of the support request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of comments returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Not Found - The requested resource does not exist. Bad Gateway - The upstream support system returned an
                error that a retry will not resolve (e.g. an authentication or configuration problem). Escalation is
                required. Service Unavailable - The upstream support system is temporarily unavailable (rate limited,
                upstream 5xx, or a network error). Retry after the interval indicated by the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_ticket_comments(ticket_id, request_options=request_options))

    def list_ticket_tags(
        self, ticket_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> TagsGetResponse:
        """Returns the tags currently set on a support request.

        DoiT employee (doer) callers receive the full tag set verbatim, including internal namespaces (e.g. ``tier/*``,
        ``synapse_*``). Customer callers receive only tags under the ``customer_tag/`` namespace, with that prefix
        stripped (e.g. a tag added as ``billing`` reads back as ``billing``). Always present; empty array when the
        caller has no visible tags.

        Args:
            ticket_id: The unique identifier of the support request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_ticket_tags(ticket_id, request_options=request_options))

    def list_tickets(
        self,
        *,
        max_results: int | None = 100,
        page_token: str | None = None,
        filter_: str | None = None,
        min_creation_time: str | None = None,
        max_creation_time: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TicketsList:
        """Returns a list of all historical requests that your account has access to. Tickets are returned in reverse
        chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results of the request. The syntax is ``key:[<value>]``. e.g:
                "severity:normal". Multiple filters can be connected using a pipe |. Note that using different keys in
                the same filter results in “AND,” while using the same key multiple times in the same filter results in
                “OR”.
            min_creation_time: Min value for tickets creation time, in milliseconds since the POSIX epoch. If set, only
                tickets created after or at this timestamp are returned.
            max_creation_time: Max value for tickets creation time, in milliseconds since the POSIX epoch. If set, only
                tickets created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of historical requests returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Bad Gateway - The upstream support system returned an
                error that a retry will not resolve (e.g. an authentication or configuration problem). Escalation is
                required. Service Unavailable - The upstream support system is temporarily unavailable (rate limited,
                upstream 5xx, or a network error). Retry after the interval indicated by the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_tickets(
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                min_creation_time=min_creation_time,
                max_creation_time=max_creation_time,
                request_options=request_options,
            ),
        )

    def remove_ticket_tags(
        self,
        ticket_id: int,
        body: TagsRequest | TagsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TagsResponse:
        """Removes one or more tags from an existing support request. The operation is surgical — only the tags listed
        in the request are removed; tags not listed are preserved. Removing a tag that is not present is a successful
        no-op.

        For customers, the system applies the same ``customer_tag/`` namespace mapping as on add, so a customer who
        added ``my_tag`` (stored as ``customer_tag/my_tag``) can remove it by sending ``my_tag``.

        Args:
            ticket_id: The unique identifier of the support request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Tags removed (or already absent).

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.remove_ticket_tags(ticket_id, body, request_options=request_options))

    def update_ticket(
        self,
        ticket_id: int,
        body: SupportV1TicketsRequest | SupportV1TicketsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SupportV1TicketsResponse:
        """Partially updates a support request. Supports setting the request ``status`` and/or ``assignee``. DoiT
        employees may set any of ``open``, ``pending``, ``hold``, or ``solved`` and may set the ``assignee``; customers
        may set only ``solved`` (parity with the console "mark as resolved" action) and may not set an assignee.
        ``closed`` is not settable via the API (Zendesk auto-closes from ``solved``). The ``assignee`` is a
        DoiT-employee email, resolved server-side to a Zendesk agent; an email that does not resolve to an active agent
        returns ``400``. At least one mutable field must be present. The response echoes the fields that were applied.

        Args:
            ticket_id: The unique identifier of the support request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Request updated. Echoes the fields that were applied.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_ticket(ticket_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> SupportRequestsWithRawResponse:
        return self._with_raw_response


class AsyncSupportRequests:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSupportRequestsWithRawResponse(client, server, auth)

    async def add_ticket_tags(
        self,
        ticket_id: int,
        body: TagsRequest | TagsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TagsResponse:
        """Adds one or more tags to an existing support request. The operation is surgical — only the tags listed in the
        request are added; existing tags on the ticket are preserved. Re-adding a tag that is already present is a
        successful no-op.

        All submitted tags are normalized (trim + lowercase) before storage. For customers, the system additionally
        applies a ``customer_tag/`` namespace prefix to prevent collisions with internal DoiT process tags. The response
        echoes the actual stored strings so callers can verify the transform.

        Args:
            ticket_id: The unique identifier of the support request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Tags added (or already present).

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.add_ticket_tags(ticket_id, body, request_options=request_options))

    async def create_ticket(
        self,
        body: TicketCreateFormExtApi | TicketCreateFormExtApiDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TicketResponseExtApi:
        """Creates a new support request

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - New support request created.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_ticket(body, request_options=request_options))

    async def create_ticket_comment(
        self,
        ticket_id: int,
        body: CreateCommentRequest | CreateCommentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CommentExtApi:
        """Adds a comment to an existing support request. For customers and service-account callers, comments are always
        public, even when ``private`` is ``true``. Callers authenticated with DoiT employee privileges can create
        private internal notes by setting ``private`` to ``true``. The response always includes ``public``, reflecting
        the effective visibility after these rules are applied, not merely the requested privacy. Existing
        authentication and ticket authorization are unchanged.

        Args:
            ticket_id: The unique identifier of the support request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - Comment added to the support request.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_ticket_comment(ticket_id, body, request_options=request_options)
        )

    async def get_ticket(
        self, ticket_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TicketDetailExtApi:
        """Returns the details of a single support request by its ID.

        Args:
            ticket_id: The unique identifier of the support request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Support request details returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Bad Gateway - The upstream support system returned an
                error that a retry will not resolve (e.g. an authentication or configuration problem). Escalation is
                required. Service Unavailable - The upstream support system is temporarily unavailable (rate limited,
                upstream 5xx, or a network error). Retry after the interval indicated by the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_ticket(ticket_id, request_options=request_options))

    async def list_ticket_comments(
        self, ticket_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CommentsResponseExtApi:
        """Returns all permitted comments on a support request. Customers and service-account callers receive only
        public comments; private comment bodies and attachments are excluded. Callers authenticated with DoiT employee
        privileges receive both public and private comments, subject to existing ticket authorization. Each comment
        includes ``public``, sourced from Zendesk: ``true`` means public and ``false`` means private (internal). Missing
        visibility in legacy responses or snapshots means unknown, not private. All comments are returned in a single
        response (no pagination).

        Args:
            ticket_id: The unique identifier of the support request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of comments returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Not Found - The requested resource does not exist. Bad Gateway - The upstream support system returned an
                error that a retry will not resolve (e.g. an authentication or configuration problem). Escalation is
                required. Service Unavailable - The upstream support system is temporarily unavailable (rate limited,
                upstream 5xx, or a network error). Retry after the interval indicated by the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_ticket_comments(ticket_id, request_options=request_options))

    async def list_ticket_tags(
        self, ticket_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TagsGetResponse:
        """Returns the tags currently set on a support request.

        DoiT employee (doer) callers receive the full tag set verbatim, including internal namespaces (e.g. ``tier/*``,
        ``synapse_*``). Customer callers receive only tags under the ``customer_tag/`` namespace, with that prefix
        stripped (e.g. a tag added as ``billing`` reads back as ``billing``). Always present; empty array when the
        caller has no visible tags.

        Args:
            ticket_id: The unique identifier of the support request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_ticket_tags(ticket_id, request_options=request_options))

    async def list_tickets(
        self,
        *,
        max_results: int | None = 100,
        page_token: str | None = None,
        filter_: str | None = None,
        min_creation_time: str | None = None,
        max_creation_time: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TicketsList:
        """Returns a list of all historical requests that your account has access to. Tickets are returned in reverse
        chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results of the request. The syntax is ``key:[<value>]``. e.g:
                "severity:normal". Multiple filters can be connected using a pipe |. Note that using different keys in
                the same filter results in “AND,” while using the same key multiple times in the same filter results in
                “OR”.
            min_creation_time: Min value for tickets creation time, in milliseconds since the POSIX epoch. If set, only
                tickets created after or at this timestamp are returned.
            max_creation_time: Max value for tickets creation time, in milliseconds since the POSIX epoch. If set, only
                tickets created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of historical requests returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Bad Gateway - The upstream support system returned an
                error that a retry will not resolve (e.g. an authentication or configuration problem). Escalation is
                required. Service Unavailable - The upstream support system is temporarily unavailable (rate limited,
                upstream 5xx, or a network error). Retry after the interval indicated by the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_tickets(
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                min_creation_time=min_creation_time,
                max_creation_time=max_creation_time,
                request_options=request_options,
            ),
        )

    async def remove_ticket_tags(
        self,
        ticket_id: int,
        body: TagsRequest | TagsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TagsResponse:
        """Removes one or more tags from an existing support request. The operation is surgical — only the tags listed
        in the request are removed; tags not listed are preserved. Removing a tag that is not present is a successful
        no-op.

        For customers, the system applies the same ``customer_tag/`` namespace mapping as on add, so a customer who
        added ``my_tag`` (stored as ``customer_tag/my_tag``) can remove it by sending ``my_tag``.

        Args:
            ticket_id: The unique identifier of the support request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Tags removed (or already absent).

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.remove_ticket_tags(ticket_id, body, request_options=request_options)
        )

    async def update_ticket(
        self,
        ticket_id: int,
        body: SupportV1TicketsRequest | SupportV1TicketsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SupportV1TicketsResponse:
        """Partially updates a support request. Supports setting the request ``status`` and/or ``assignee``. DoiT
        employees may set any of ``open``, ``pending``, ``hold``, or ``solved`` and may set the ``assignee``; customers
        may set only ``solved`` (parity with the console "mark as resolved" action) and may not set an assignee.
        ``closed`` is not settable via the API (Zendesk auto-closes from ``solved``). The ``assignee`` is a
        DoiT-employee email, resolved server-side to a Zendesk agent; an email that does not resolve to an active agent
        returns ``400``. At least one mutable field must be present. The response echoes the fields that were applied.

        Args:
            ticket_id: The unique identifier of the support request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Request updated. Echoes the fields that were applied.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_ticket(ticket_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSupportRequestsWithRawResponse:
        return self._with_raw_response


class SupportRequestsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_ticket_tags(
        self,
        ticket_id: int,
        body: TagsRequest | TagsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TagsResponse, AddTicketTagsErrorBody]:
        """Adds one or more tags to an existing support request. The operation is surgical — only the tags listed in the
        request are added; existing tags on the ticket are preserved. Re-adding a tag that is already present is a
        successful no-op.

        All submitted tags are normalized (trim + lowercase) before storage. For customers, the system additionally
        applies a ``customer_tag/`` namespace prefix to prevent collisions with internal DoiT process tags. The response
        echoes the actual stored strings so callers can verify the transform.

        Args:
            ticket_id: The unique identifier of the support request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/support/v1/tickets/{ticketId}/tags"),
            path_params=[param[int]("ticketId", ticket_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TagsRequest | TagsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[TagsResponse],
            error_mapper=add_ticket_tags_error_mapper,
            request_options=request_options,
        )

    def create_ticket(
        self,
        body: TicketCreateFormExtApi | TicketCreateFormExtApiDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TicketResponseExtApi, CreateTicketErrorBody]:
        """Creates a new support request

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/support/v1/tickets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TicketCreateFormExtApi | TicketCreateFormExtApiDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[TicketResponseExtApi],
            error_mapper=create_ticket_error_mapper,
            request_options=request_options,
        )

    def create_ticket_comment(
        self,
        ticket_id: int,
        body: CreateCommentRequest | CreateCommentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CommentExtApi, CreateTicketCommentErrorBody]:
        """Adds a comment to an existing support request. For customers and service-account callers, comments are always
        public, even when ``private`` is ``true``. Callers authenticated with DoiT employee privileges can create
        private internal notes by setting ``private`` to ``true``. The response always includes ``public``, reflecting
        the effective visibility after these rules are applied, not merely the requested privacy. Existing
        authentication and ticket authorization are unchanged.

        Args:
            ticket_id: The unique identifier of the support request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/support/v1/tickets/{ticketId}/comments"),
            path_params=[param[int]("ticketId", ticket_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCommentRequest | CreateCommentRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CommentExtApi],
            error_mapper=create_ticket_comment_error_mapper,
            request_options=request_options,
        )

    def get_ticket(
        self, ticket_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TicketDetailExtApi, GetTicketErrorBody]:
        """Returns the details of a single support request by its ID.

        Args:
            ticket_id: The unique identifier of the support request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/support/v1/tickets/{ticketId}"),
            path_params=[param[int]("ticketId", ticket_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[TicketDetailExtApi],
            error_mapper=get_ticket_error_mapper,
            request_options=request_options,
        )

    def list_ticket_comments(
        self, ticket_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CommentsResponseExtApi, ListTicketCommentsErrorBody]:
        """Returns all permitted comments on a support request. Customers and service-account callers receive only
        public comments; private comment bodies and attachments are excluded. Callers authenticated with DoiT employee
        privileges receive both public and private comments, subject to existing ticket authorization. Each comment
        includes ``public``, sourced from Zendesk: ``true`` means public and ``false`` means private (internal). Missing
        visibility in legacy responses or snapshots means unknown, not private. All comments are returned in a single
        response (no pagination).

        Args:
            ticket_id: The unique identifier of the support request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/support/v1/tickets/{ticketId}/comments"),
            path_params=[param[int]("ticketId", ticket_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CommentsResponseExtApi],
            error_mapper=list_ticket_comments_error_mapper,
            request_options=request_options,
        )

    def list_ticket_tags(
        self, ticket_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TagsGetResponse, ListTicketTagsErrorBody]:
        """Returns the tags currently set on a support request.

        DoiT employee (doer) callers receive the full tag set verbatim, including internal namespaces (e.g. ``tier/*``,
        ``synapse_*``). Customer callers receive only tags under the ``customer_tag/`` namespace, with that prefix
        stripped (e.g. a tag added as ``billing`` reads back as ``billing``). Always present; empty array when the
        caller has no visible tags.

        Args:
            ticket_id: The unique identifier of the support request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/support/v1/tickets/{ticketId}/tags"),
            path_params=[param[int]("ticketId", ticket_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[TagsGetResponse],
            error_mapper=list_ticket_tags_error_mapper,
            request_options=request_options,
        )

    def list_tickets(
        self,
        *,
        max_results: int | None = 100,
        page_token: str | None = None,
        filter_: str | None = None,
        min_creation_time: str | None = None,
        max_creation_time: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TicketsList, ListTicketsErrorBody]:
        """Returns a list of all historical requests that your account has access to. Tickets are returned in reverse
        chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results of the request. The syntax is ``key:[<value>]``. e.g:
                "severity:normal". Multiple filters can be connected using a pipe |. Note that using different keys in
                the same filter results in “AND,” while using the same key multiple times in the same filter results in
                “OR”.
            min_creation_time: Min value for tickets creation time, in milliseconds since the POSIX epoch. If set, only
                tickets created after or at this timestamp are returned.
            max_creation_time: Max value for tickets creation time, in milliseconds since the POSIX epoch. If set, only
                tickets created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/support/v1/tickets"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[str | None]("minCreationTime", min_creation_time),
                param[str | None]("maxCreationTime", max_creation_time),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[TicketsList],
            error_mapper=list_tickets_error_mapper,
            request_options=request_options,
        )

    def remove_ticket_tags(
        self,
        ticket_id: int,
        body: TagsRequest | TagsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TagsResponse, RemoveTicketTagsErrorBody]:
        """Removes one or more tags from an existing support request. The operation is surgical — only the tags listed
        in the request are removed; tags not listed are preserved. Removing a tag that is not present is a successful
        no-op.

        For customers, the system applies the same ``customer_tag/`` namespace mapping as on add, so a customer who
        added ``my_tag`` (stored as ``customer_tag/my_tag``) can remove it by sending ``my_tag``.

        Args:
            ticket_id: The unique identifier of the support request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/support/v1/tickets/{ticketId}/tags"),
            path_params=[param[int]("ticketId", ticket_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TagsRequest | TagsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[TagsResponse],
            error_mapper=remove_ticket_tags_error_mapper,
            request_options=request_options,
        )

    def update_ticket(
        self,
        ticket_id: int,
        body: SupportV1TicketsRequest | SupportV1TicketsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SupportV1TicketsResponse, UpdateTicketErrorBody]:
        """Partially updates a support request. Supports setting the request ``status`` and/or ``assignee``. DoiT
        employees may set any of ``open``, ``pending``, ``hold``, or ``solved`` and may set the ``assignee``; customers
        may set only ``solved`` (parity with the console "mark as resolved" action) and may not set an assignee.
        ``closed`` is not settable via the API (Zendesk auto-closes from ``solved``). The ``assignee`` is a
        DoiT-employee email, resolved server-side to a Zendesk agent; an email that does not resolve to an active agent
        returns ``400``. At least one mutable field must be present. The response echoes the fields that were applied.

        Args:
            ticket_id: The unique identifier of the support request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/support/v1/tickets/{ticketId}"),
            path_params=[param[int]("ticketId", ticket_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SupportV1TicketsRequest | SupportV1TicketsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[SupportV1TicketsResponse],
            error_mapper=update_ticket_error_mapper,
            request_options=request_options,
        )


class AsyncSupportRequestsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_ticket_tags(
        self,
        ticket_id: int,
        body: TagsRequest | TagsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TagsResponse, AddTicketTagsErrorBody]:
        """Adds one or more tags to an existing support request. The operation is surgical — only the tags listed in the
        request are added; existing tags on the ticket are preserved. Re-adding a tag that is already present is a
        successful no-op.

        All submitted tags are normalized (trim + lowercase) before storage. For customers, the system additionally
        applies a ``customer_tag/`` namespace prefix to prevent collisions with internal DoiT process tags. The response
        echoes the actual stored strings so callers can verify the transform.

        Args:
            ticket_id: The unique identifier of the support request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/support/v1/tickets/{ticketId}/tags"),
            path_params=[param[int]("ticketId", ticket_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TagsRequest | TagsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[TagsResponse],
            error_mapper=add_ticket_tags_error_mapper,
            request_options=request_options,
        )

    async def create_ticket(
        self,
        body: TicketCreateFormExtApi | TicketCreateFormExtApiDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TicketResponseExtApi, CreateTicketErrorBody]:
        """Creates a new support request

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/support/v1/tickets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TicketCreateFormExtApi | TicketCreateFormExtApiDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[TicketResponseExtApi],
            error_mapper=create_ticket_error_mapper,
            request_options=request_options,
        )

    async def create_ticket_comment(
        self,
        ticket_id: int,
        body: CreateCommentRequest | CreateCommentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CommentExtApi, CreateTicketCommentErrorBody]:
        """Adds a comment to an existing support request. For customers and service-account callers, comments are always
        public, even when ``private`` is ``true``. Callers authenticated with DoiT employee privileges can create
        private internal notes by setting ``private`` to ``true``. The response always includes ``public``, reflecting
        the effective visibility after these rules are applied, not merely the requested privacy. Existing
        authentication and ticket authorization are unchanged.

        Args:
            ticket_id: The unique identifier of the support request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/support/v1/tickets/{ticketId}/comments"),
            path_params=[param[int]("ticketId", ticket_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCommentRequest | CreateCommentRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CommentExtApi],
            error_mapper=create_ticket_comment_error_mapper,
            request_options=request_options,
        )

    async def get_ticket(
        self, ticket_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TicketDetailExtApi, GetTicketErrorBody]:
        """Returns the details of a single support request by its ID.

        Args:
            ticket_id: The unique identifier of the support request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/support/v1/tickets/{ticketId}"),
            path_params=[param[int]("ticketId", ticket_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[TicketDetailExtApi],
            error_mapper=get_ticket_error_mapper,
            request_options=request_options,
        )

    async def list_ticket_comments(
        self, ticket_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CommentsResponseExtApi, ListTicketCommentsErrorBody]:
        """Returns all permitted comments on a support request. Customers and service-account callers receive only
        public comments; private comment bodies and attachments are excluded. Callers authenticated with DoiT employee
        privileges receive both public and private comments, subject to existing ticket authorization. Each comment
        includes ``public``, sourced from Zendesk: ``true`` means public and ``false`` means private (internal). Missing
        visibility in legacy responses or snapshots means unknown, not private. All comments are returned in a single
        response (no pagination).

        Args:
            ticket_id: The unique identifier of the support request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/support/v1/tickets/{ticketId}/comments"),
            path_params=[param[int]("ticketId", ticket_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CommentsResponseExtApi],
            error_mapper=list_ticket_comments_error_mapper,
            request_options=request_options,
        )

    async def list_ticket_tags(
        self, ticket_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TagsGetResponse, ListTicketTagsErrorBody]:
        """Returns the tags currently set on a support request.

        DoiT employee (doer) callers receive the full tag set verbatim, including internal namespaces (e.g. ``tier/*``,
        ``synapse_*``). Customer callers receive only tags under the ``customer_tag/`` namespace, with that prefix
        stripped (e.g. a tag added as ``billing`` reads back as ``billing``). Always present; empty array when the
        caller has no visible tags.

        Args:
            ticket_id: The unique identifier of the support request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/support/v1/tickets/{ticketId}/tags"),
            path_params=[param[int]("ticketId", ticket_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[TagsGetResponse],
            error_mapper=list_ticket_tags_error_mapper,
            request_options=request_options,
        )

    async def list_tickets(
        self,
        *,
        max_results: int | None = 100,
        page_token: str | None = None,
        filter_: str | None = None,
        min_creation_time: str | None = None,
        max_creation_time: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TicketsList, ListTicketsErrorBody]:
        """Returns a list of all historical requests that your account has access to. Tickets are returned in reverse
        chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results of the request. The syntax is ``key:[<value>]``. e.g:
                "severity:normal". Multiple filters can be connected using a pipe |. Note that using different keys in
                the same filter results in “AND,” while using the same key multiple times in the same filter results in
                “OR”.
            min_creation_time: Min value for tickets creation time, in milliseconds since the POSIX epoch. If set, only
                tickets created after or at this timestamp are returned.
            max_creation_time: Max value for tickets creation time, in milliseconds since the POSIX epoch. If set, only
                tickets created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/support/v1/tickets"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[str | None]("minCreationTime", min_creation_time),
                param[str | None]("maxCreationTime", max_creation_time),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[TicketsList],
            error_mapper=list_tickets_error_mapper,
            request_options=request_options,
        )

    async def remove_ticket_tags(
        self,
        ticket_id: int,
        body: TagsRequest | TagsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TagsResponse, RemoveTicketTagsErrorBody]:
        """Removes one or more tags from an existing support request. The operation is surgical — only the tags listed
        in the request are removed; tags not listed are preserved. Removing a tag that is not present is a successful
        no-op.

        For customers, the system applies the same ``customer_tag/`` namespace mapping as on add, so a customer who
        added ``my_tag`` (stored as ``customer_tag/my_tag``) can remove it by sending ``my_tag``.

        Args:
            ticket_id: The unique identifier of the support request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/support/v1/tickets/{ticketId}/tags"),
            path_params=[param[int]("ticketId", ticket_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TagsRequest | TagsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[TagsResponse],
            error_mapper=remove_ticket_tags_error_mapper,
            request_options=request_options,
        )

    async def update_ticket(
        self,
        ticket_id: int,
        body: SupportV1TicketsRequest | SupportV1TicketsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SupportV1TicketsResponse, UpdateTicketErrorBody]:
        """Partially updates a support request. Supports setting the request ``status`` and/or ``assignee``. DoiT
        employees may set any of ``open``, ``pending``, ``hold``, or ``solved`` and may set the ``assignee``; customers
        may set only ``solved`` (parity with the console "mark as resolved" action) and may not set an assignee.
        ``closed`` is not settable via the API (Zendesk auto-closes from ``solved``). The ``assignee`` is a
        DoiT-employee email, resolved server-side to a Zendesk agent; an email that does not resolve to an active agent
        returns ``400``. At least one mutable field must be present. The response echoes the fields that were applied.

        Args:
            ticket_id: The unique identifier of the support request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/support/v1/tickets/{ticketId}"),
            path_params=[param[int]("ticketId", ticket_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SupportV1TicketsRequest | SupportV1TicketsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[SupportV1TicketsResponse],
            error_mapper=update_ticket_error_mapper,
            request_options=request_options,
        )
