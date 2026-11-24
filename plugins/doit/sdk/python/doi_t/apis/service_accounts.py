from __future__ import annotations

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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_service_account_error import CreateServiceAccountErrorBody, create_service_account_error_mapper
from ..errors.create_service_account_token_error import (
    CreateServiceAccountTokenErrorBody,
    create_service_account_token_error_mapper,
)
from ..errors.delete_service_account_error import DeleteServiceAccountErrorBody, delete_service_account_error_mapper
from ..errors.delete_service_account_token_error import (
    DeleteServiceAccountTokenErrorBody,
    delete_service_account_token_error_mapper,
)
from ..errors.get_service_account_error import GetServiceAccountErrorBody, get_service_account_error_mapper
from ..errors.get_service_account_token_error import (
    GetServiceAccountTokenErrorBody,
    get_service_account_token_error_mapper,
)
from ..errors.list_service_account_tokens_error import (
    ListServiceAccountTokensErrorBody,
    list_service_account_tokens_error_mapper,
)
from ..errors.list_service_accounts_error import ListServiceAccountsErrorBody, list_service_accounts_error_mapper
from ..errors.update_service_account_error import UpdateServiceAccountErrorBody, update_service_account_error_mapper
from ..errors.update_service_account_token_error import (
    UpdateServiceAccountTokenErrorBody,
    update_service_account_token_error_mapper,
)
from ..models.create_service_account_request import CreateServiceAccountRequest, CreateServiceAccountRequestDict
from ..models.create_service_account_token_request import (
    CreateServiceAccountTokenRequest,
    CreateServiceAccountTokenRequestDict,
)
from ..models.create_service_account_token_response import CreateServiceAccountTokenResponse
from ..models.service_account import ServiceAccount
from ..models.service_account_token import ServiceAccountToken
from ..models.service_account_tokens_response import ServiceAccountTokensResponse
from ..models.service_accounts_response import ServiceAccountsResponse
from ..models.update_service_account_request import UpdateServiceAccountRequest, UpdateServiceAccountRequestDict
from ..models.update_service_account_token_request import (
    UpdateServiceAccountTokenRequest,
    UpdateServiceAccountTokenRequestDict,
)
from ..server.server import Server


class ServiceAccounts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ServiceAccountsWithRawResponse(client, server, auth)

    def create_service_account(
        self,
        idempotency_key: str,
        body: CreateServiceAccountRequest | CreateServiceAccountRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ServiceAccount:
        """Creates a service account owned by the authenticated customer. It cannot authenticate anything until it has
        an API token; mint one with the ``api-tokens`` sub-resource. Returns ``409`` when another service account of the
        customer already uses ``name``. With ``dryRun=true`` the request goes through the same checks as a real create
        (name bounds and uniqueness, permission names, caller scope) and returns the same errors without creating
        anything. When the caller authenticates with a service account token, ``createdBy``, ``createdByEmail`` and
        ``createdByUserId`` are ``null``. Requires the ``serviceAccountCreator`` permission.

        Args:
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            body: The service account to create.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Dry run only (``dryRun=true``). Every check of a real create passed and nothing was created; ``id``,
            ``createTime``, ``updateTime`` and ``etag`` are ``null``.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. The
                request conflicts with the current state of the resource. The request is well-formed but a value is not
                accepted, such as an unknown permission name. Unexpected server error. ``error`` is ``ProblemDetails |
                Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_service_account(
                idempotency_key, body, dry_run=dry_run, request_options=request_options
            ),
        )

    def create_service_account_token(
        self,
        service_account_id: str,
        idempotency_key: str,
        body: CreateServiceAccountTokenRequest | CreateServiceAccountTokenRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateServiceAccountTokenResponse:
        """Mints an API token for the service account and returns its ``accessToken`` once. The token inherits the
        service account's permissions as they stand at creation; there is no per-token scoping. Returns ``409`` when the
        service account already has a token of the same name, and ``422`` at the cap of 10 tokens.

        ``dryRun=true`` checks the name bounds only, then returns a preview without creating anything. It does **not**
        verify that the service account exists, that the name is unused, or that the account is under the token cap, so
        a dry run can succeed where the real create then returns ``404``, ``409`` or ``422``. Requires the
        ``serviceAccountCreator`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            body: The API token to create.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Dry run only (``dryRun=true``). The name passed its bounds check and nothing was created; ``id`` and
            ``createTime`` are ``null`` and ``accessToken`` is an empty string. Not a guarantee that a real create would
            succeed — see the operation description.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. The
                requested resource does not exist. The request conflicts with the current state of the resource. The
                request is well-formed but a value is not accepted, such as an unknown permission name. Unexpected
                server error. ``error`` is ``ProblemDetails | Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_service_account_token(
                service_account_id, idempotency_key, body, dry_run=dry_run, request_options=request_options
            ),
        )

    def delete_service_account(
        self,
        id_: str,
        if_match: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Permanently deletes a service account and all of its API tokens, which stop authenticating immediately.
        Deleting an ID that no longer exists returns ``404``. Requires the ``serviceAccountManager`` permission.

        Args:
            id_: Service account ID, as returned in the id field by the list and create operations.
            if_match: The ETag of the current version, from a get, create or update response. A stale value returns 412;
                re-read the resource and retry with the new ETag.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content - Service account deleted, or validated when ``dryRun=true``.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. The
                requested resource does not exist. The ``If-Match`` value no longer matches the current version of the
                resource. The request is missing the required ``If-Match`` header. Unexpected server error. ``error`` is
                ``ProblemDetails | Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_service_account(
                id_, if_match, idempotency_key, dry_run=dry_run, request_options=request_options
            ),
        )

    def delete_service_account_token(
        self,
        service_account_id: str,
        id_: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Permanently deletes an API token, which stops authenticating immediately. This cannot be undone. Deleting an
        ID that no longer exists returns ``404``. Requires the ``serviceAccountManager`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            id_: API token ID, as returned in the id field by the token list and create operations.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content - API token deleted, or validated when ``dryRun=true``.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. The
                requested resource does not exist. Unexpected server error. ``error`` is ``ProblemDetails | Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_service_account_token(
                service_account_id, id_, idempotency_key, dry_run=dry_run, request_options=request_options
            ),
        )

    def get_service_account(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ServiceAccount:
        """Returns a service account owned by the authenticated customer; an ID that belongs to another customer returns
        ``404``. The ``ETag`` response header carries the value to send in ``If-Match`` on update and delete. Requires
        the ``serviceAccountViewer`` permission.

        Args:
            id_: Service account ID, as returned in the id field by the list and create operations.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Service account returned.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. The
                requested resource does not exist. Unexpected server error. ``error`` is ``ProblemDetails | Error |
                RawError``."""
        return unwrap(self._with_raw_response.get_service_account(id_, request_options=request_options))

    def get_service_account_token(
        self, service_account_id: str, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ServiceAccountToken:
        """Returns one API token of the service account; an ID that belongs to another customer returns ``404``.
        ``accessToken`` is not included — it is shown only once, by the create operation. Requires the
        ``serviceAccountViewer`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            id_: API token ID, as returned in the id field by the token list and create operations.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - API token returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                The requested resource does not exist. Unexpected server error. ``error`` is ``Error | ProblemDetails |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_service_account_token(service_account_id, id_, request_options=request_options)
        )

    def list_service_account_tokens(
        self, service_account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ServiceAccountTokensResponse:
        """Returns the service account's non-deleted API tokens in a single unpaginated ``items`` array, at most 10.
        Secret material is never returned here — ``accessToken`` is shown only once, by the create operation. Requires
        the ``serviceAccountViewer`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - API tokens returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                The requested resource does not exist. Unexpected server error. ``error`` is ``Error | ProblemDetails |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_service_account_tokens(service_account_id, request_options=request_options)
        )

    def list_service_accounts(self, *, request_options: RequestOptionsOrDict | None = None) -> ServiceAccountsResponse:
        """Returns every service account owned by the authenticated customer in a single unpaginated ``items`` array, in
        no guaranteed order. Requires the ``serviceAccountViewer`` permission.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Service accounts returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Unexpected server error. ``error`` is ``Error | ProblemDetails | RawError``."""
        return unwrap(self._with_raw_response.list_service_accounts(request_options=request_options))

    def update_service_account(
        self,
        id_: str,
        if_match: str,
        idempotency_key: str,
        body: UpdateServiceAccountRequest | UpdateServiceAccountRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ServiceAccount:
        """Partially updates a service account with an ``application/merge-patch+json`` body (RFC 7396). Omitted or
        ``null`` fields stay unchanged; an explicit empty string clears ``description``. ``permissions`` replaces the
        whole list, and ``[]`` removes every permission. With ``dryRun=true`` the request goes through the same checks
        as a real update (``If-Match``, name bounds and uniqueness, permission names, caller scope) and returns the
        service account as it would look after the patch, without changing anything. Requires the
        ``serviceAccountManager`` permission.

        Args:
            id_: Service account ID, as returned in the id field by the list and create operations.
            if_match: The ETag of the current version, from a get, create or update response. A stale value returns 412;
                re-read the resource and retry with the new ETag.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            body: The fields to change.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Service account updated, or previewed when ``dryRun=true`` (the body is the merged result, and ``etag``
            is still the current one).

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. The
                requested resource does not exist. The request conflicts with the current state of the resource. The
                ``If-Match`` value no longer matches the current version of the resource. The request ``Content-Type``
                is not accepted by this operation. The request is well-formed but a value is not accepted, such as an
                unknown permission name. The request is missing the required ``If-Match`` header. Unexpected server
                error. ``error`` is ``ProblemDetails | Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_service_account(
                id_, if_match, idempotency_key, body, dry_run=dry_run, request_options=request_options
            ),
        )

    def update_service_account_token(
        self,
        service_account_id: str,
        id_: str,
        idempotency_key: str,
        body: UpdateServiceAccountTokenRequest | UpdateServiceAccountTokenRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ServiceAccountToken:
        """Moves the token between ``active`` and ``disabled`` by setting ``state``. Disabling takes effect immediately:
        the token stops authenticating until it is re-enabled. Setting the state a token already has succeeds and
        changes nothing.

        The two directions are not symmetric. Disabling a token whose expiry has passed succeeds, but re-enabling an
        expired token returns ``422`` — expiry is final, and a new token has to be created instead. ``deleted`` and
        ``expired`` are not accepted values: a token is deleted through the delete operation, and expires on its own.

        With ``dryRun=true`` nothing is written and the response body is the token as it would look after the change, so
        a ``422`` here means a real request would also be refused. Requires the ``serviceAccountManager`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            id_: API token ID, as returned in the id field by the token list and create operations.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            body: The state to move the token to.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - API token state changed, or previewed when ``dryRun=true``.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. The
                requested resource does not exist. The request is well-formed but a value is not accepted, such as an
                unknown permission name. Unexpected server error. ``error`` is ``ProblemDetails | Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_service_account_token(
                service_account_id, id_, idempotency_key, body, dry_run=dry_run, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ServiceAccountsWithRawResponse:
        return self._with_raw_response


class AsyncServiceAccounts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncServiceAccountsWithRawResponse(client, server, auth)

    async def create_service_account(
        self,
        idempotency_key: str,
        body: CreateServiceAccountRequest | CreateServiceAccountRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ServiceAccount:
        """Creates a service account owned by the authenticated customer. It cannot authenticate anything until it has
        an API token; mint one with the ``api-tokens`` sub-resource. Returns ``409`` when another service account of the
        customer already uses ``name``. With ``dryRun=true`` the request goes through the same checks as a real create
        (name bounds and uniqueness, permission names, caller scope) and returns the same errors without creating
        anything. When the caller authenticates with a service account token, ``createdBy``, ``createdByEmail`` and
        ``createdByUserId`` are ``null``. Requires the ``serviceAccountCreator`` permission.

        Args:
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            body: The service account to create.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Dry run only (``dryRun=true``). Every check of a real create passed and nothing was created; ``id``,
            ``createTime``, ``updateTime`` and ``etag`` are ``null``.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. The
                request conflicts with the current state of the resource. The request is well-formed but a value is not
                accepted, such as an unknown permission name. Unexpected server error. ``error`` is ``ProblemDetails |
                Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_service_account(
                idempotency_key, body, dry_run=dry_run, request_options=request_options
            ),
        )

    async def create_service_account_token(
        self,
        service_account_id: str,
        idempotency_key: str,
        body: CreateServiceAccountTokenRequest | CreateServiceAccountTokenRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateServiceAccountTokenResponse:
        """Mints an API token for the service account and returns its ``accessToken`` once. The token inherits the
        service account's permissions as they stand at creation; there is no per-token scoping. Returns ``409`` when the
        service account already has a token of the same name, and ``422`` at the cap of 10 tokens.

        ``dryRun=true`` checks the name bounds only, then returns a preview without creating anything. It does **not**
        verify that the service account exists, that the name is unused, or that the account is under the token cap, so
        a dry run can succeed where the real create then returns ``404``, ``409`` or ``422``. Requires the
        ``serviceAccountCreator`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            body: The API token to create.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Dry run only (``dryRun=true``). The name passed its bounds check and nothing was created; ``id`` and
            ``createTime`` are ``null`` and ``accessToken`` is an empty string. Not a guarantee that a real create would
            succeed — see the operation description.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. The
                requested resource does not exist. The request conflicts with the current state of the resource. The
                request is well-formed but a value is not accepted, such as an unknown permission name. Unexpected
                server error. ``error`` is ``ProblemDetails | Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_service_account_token(
                service_account_id, idempotency_key, body, dry_run=dry_run, request_options=request_options
            ),
        )

    async def delete_service_account(
        self,
        id_: str,
        if_match: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Permanently deletes a service account and all of its API tokens, which stop authenticating immediately.
        Deleting an ID that no longer exists returns ``404``. Requires the ``serviceAccountManager`` permission.

        Args:
            id_: Service account ID, as returned in the id field by the list and create operations.
            if_match: The ETag of the current version, from a get, create or update response. A stale value returns 412;
                re-read the resource and retry with the new ETag.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content - Service account deleted, or validated when ``dryRun=true``.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. The
                requested resource does not exist. The ``If-Match`` value no longer matches the current version of the
                resource. The request is missing the required ``If-Match`` header. Unexpected server error. ``error`` is
                ``ProblemDetails | Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_service_account(
                id_, if_match, idempotency_key, dry_run=dry_run, request_options=request_options
            ),
        )

    async def delete_service_account_token(
        self,
        service_account_id: str,
        id_: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Permanently deletes an API token, which stops authenticating immediately. This cannot be undone. Deleting an
        ID that no longer exists returns ``404``. Requires the ``serviceAccountManager`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            id_: API token ID, as returned in the id field by the token list and create operations.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content - API token deleted, or validated when ``dryRun=true``.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. The
                requested resource does not exist. Unexpected server error. ``error`` is ``ProblemDetails | Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_service_account_token(
                service_account_id, id_, idempotency_key, dry_run=dry_run, request_options=request_options
            ),
        )

    async def get_service_account(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ServiceAccount:
        """Returns a service account owned by the authenticated customer; an ID that belongs to another customer returns
        ``404``. The ``ETag`` response header carries the value to send in ``If-Match`` on update and delete. Requires
        the ``serviceAccountViewer`` permission.

        Args:
            id_: Service account ID, as returned in the id field by the list and create operations.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Service account returned.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. The
                requested resource does not exist. Unexpected server error. ``error`` is ``ProblemDetails | Error |
                RawError``."""
        return unwrap(await self._with_raw_response.get_service_account(id_, request_options=request_options))

    async def get_service_account_token(
        self, service_account_id: str, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ServiceAccountToken:
        """Returns one API token of the service account; an ID that belongs to another customer returns ``404``.
        ``accessToken`` is not included — it is shown only once, by the create operation. Requires the
        ``serviceAccountViewer`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            id_: API token ID, as returned in the id field by the token list and create operations.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - API token returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                The requested resource does not exist. Unexpected server error. ``error`` is ``Error | ProblemDetails |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_service_account_token(
                service_account_id, id_, request_options=request_options
            ),
        )

    async def list_service_account_tokens(
        self, service_account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ServiceAccountTokensResponse:
        """Returns the service account's non-deleted API tokens in a single unpaginated ``items`` array, at most 10.
        Secret material is never returned here — ``accessToken`` is shown only once, by the create operation. Requires
        the ``serviceAccountViewer`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - API tokens returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                The requested resource does not exist. Unexpected server error. ``error`` is ``Error | ProblemDetails |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_service_account_tokens(
                service_account_id, request_options=request_options
            ),
        )

    async def list_service_accounts(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ServiceAccountsResponse:
        """Returns every service account owned by the authenticated customer in a single unpaginated ``items`` array, in
        no guaranteed order. Requires the ``serviceAccountViewer`` permission.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Service accounts returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Unexpected server error. ``error`` is ``Error | ProblemDetails | RawError``."""
        return unwrap(await self._with_raw_response.list_service_accounts(request_options=request_options))

    async def update_service_account(
        self,
        id_: str,
        if_match: str,
        idempotency_key: str,
        body: UpdateServiceAccountRequest | UpdateServiceAccountRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ServiceAccount:
        """Partially updates a service account with an ``application/merge-patch+json`` body (RFC 7396). Omitted or
        ``null`` fields stay unchanged; an explicit empty string clears ``description``. ``permissions`` replaces the
        whole list, and ``[]`` removes every permission. With ``dryRun=true`` the request goes through the same checks
        as a real update (``If-Match``, name bounds and uniqueness, permission names, caller scope) and returns the
        service account as it would look after the patch, without changing anything. Requires the
        ``serviceAccountManager`` permission.

        Args:
            id_: Service account ID, as returned in the id field by the list and create operations.
            if_match: The ETag of the current version, from a get, create or update response. A stale value returns 412;
                re-read the resource and retry with the new ETag.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            body: The fields to change.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Service account updated, or previewed when ``dryRun=true`` (the body is the merged result, and ``etag``
            is still the current one).

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. The
                requested resource does not exist. The request conflicts with the current state of the resource. The
                ``If-Match`` value no longer matches the current version of the resource. The request ``Content-Type``
                is not accepted by this operation. The request is well-formed but a value is not accepted, such as an
                unknown permission name. The request is missing the required ``If-Match`` header. Unexpected server
                error. ``error`` is ``ProblemDetails | Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_service_account(
                id_, if_match, idempotency_key, body, dry_run=dry_run, request_options=request_options
            ),
        )

    async def update_service_account_token(
        self,
        service_account_id: str,
        id_: str,
        idempotency_key: str,
        body: UpdateServiceAccountTokenRequest | UpdateServiceAccountTokenRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ServiceAccountToken:
        """Moves the token between ``active`` and ``disabled`` by setting ``state``. Disabling takes effect immediately:
        the token stops authenticating until it is re-enabled. Setting the state a token already has succeeds and
        changes nothing.

        The two directions are not symmetric. Disabling a token whose expiry has passed succeeds, but re-enabling an
        expired token returns ``422`` — expiry is final, and a new token has to be created instead. ``deleted`` and
        ``expired`` are not accepted values: a token is deleted through the delete operation, and expires on its own.

        With ``dryRun=true`` nothing is written and the response body is the token as it would look after the change, so
        a ``422`` here means a real request would also be refused. Requires the ``serviceAccountManager`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            id_: API token ID, as returned in the id field by the token list and create operations.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            body: The state to move the token to.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - API token state changed, or previewed when ``dryRun=true``.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. The
                requested resource does not exist. The request is well-formed but a value is not accepted, such as an
                unknown permission name. Unexpected server error. ``error`` is ``ProblemDetails | Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_service_account_token(
                service_account_id, id_, idempotency_key, body, dry_run=dry_run, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncServiceAccountsWithRawResponse:
        return self._with_raw_response


class ServiceAccountsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_service_account(
        self,
        idempotency_key: str,
        body: CreateServiceAccountRequest | CreateServiceAccountRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ServiceAccount, CreateServiceAccountErrorBody]:
        """Creates a service account owned by the authenticated customer. It cannot authenticate anything until it has
        an API token; mint one with the ``api-tokens`` sub-resource. Returns ``409`` when another service account of the
        customer already uses ``name``. With ``dryRun=true`` the request goes through the same checks as a real create
        (name bounds and uniqueness, permission names, caller scope) and returns the same errors without creating
        anything. When the caller authenticates with a service account token, ``createdBy``, ``createdByEmail`` and
        ``createdByUserId`` are ``null``. Requires the ``serviceAccountCreator`` permission.

        Args:
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            body: The service account to create.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/iam/v1/service-accounts"),
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[CreateServiceAccountRequest | CreateServiceAccountRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ServiceAccount],
            error_mapper=create_service_account_error_mapper,
            request_options=request_options,
        )

    def create_service_account_token(
        self,
        service_account_id: str,
        idempotency_key: str,
        body: CreateServiceAccountTokenRequest | CreateServiceAccountTokenRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateServiceAccountTokenResponse, CreateServiceAccountTokenErrorBody]:
        """Mints an API token for the service account and returns its ``accessToken`` once. The token inherits the
        service account's permissions as they stand at creation; there is no per-token scoping. Returns ``409`` when the
        service account already has a token of the same name, and ``422`` at the cap of 10 tokens.

        ``dryRun=true`` checks the name bounds only, then returns a preview without creating anything. It does **not**
        verify that the service account exists, that the name is unused, or that the account is under the token cap, so
        a dry run can succeed where the real create then returns ``404``, ``409`` or ``422``. Requires the
        ``serviceAccountCreator`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            body: The API token to create.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens"),
            path_params=[param[str]("serviceAccountId", service_account_id)],
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[CreateServiceAccountTokenRequest | CreateServiceAccountTokenRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CreateServiceAccountTokenResponse],
            error_mapper=create_service_account_token_error_mapper,
            request_options=request_options,
        )

    def delete_service_account(
        self,
        id_: str,
        if_match: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteServiceAccountErrorBody]:
        """Permanently deletes a service account and all of its API tokens, which stop authenticating immediately.
        Deleting an ID that no longer exists returns ``404``. Requires the ``serviceAccountManager`` permission.

        Args:
            id_: Service account ID, as returned in the id field by the list and create operations.
            if_match: The ETag of the current version, from a get, create or update response. A stale value returns 412;
                re-read the resource and retry with the new ETag.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/iam/v1/service-accounts/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("If-Match", if_match), param[str]("Idempotency-Key", idempotency_key)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=delete_service_account_error_mapper,
            request_options=request_options,
        )

    def delete_service_account_token(
        self,
        service_account_id: str,
        id_: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteServiceAccountTokenErrorBody]:
        """Permanently deletes an API token, which stops authenticating immediately. This cannot be undone. Deleting an
        ID that no longer exists returns ``404``. Requires the ``serviceAccountManager`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            id_: API token ID, as returned in the id field by the token list and create operations.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens/{id}"),
            path_params=[param[str]("serviceAccountId", service_account_id), param[str]("id", id_)],
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=delete_service_account_token_error_mapper,
            request_options=request_options,
        )

    def get_service_account(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ServiceAccount, GetServiceAccountErrorBody]:
        """Returns a service account owned by the authenticated customer; an ID that belongs to another customer returns
        ``404``. The ``ETag`` response header carries the value to send in ``If-Match`` on update and delete. Requires
        the ``serviceAccountViewer`` permission.

        Args:
            id_: Service account ID, as returned in the id field by the list and create operations.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/iam/v1/service-accounts/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ServiceAccount],
            error_mapper=get_service_account_error_mapper,
            request_options=request_options,
        )

    def get_service_account_token(
        self, service_account_id: str, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ServiceAccountToken, GetServiceAccountTokenErrorBody]:
        """Returns one API token of the service account; an ID that belongs to another customer returns ``404``.
        ``accessToken`` is not included — it is shown only once, by the create operation. Requires the
        ``serviceAccountViewer`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            id_: API token ID, as returned in the id field by the token list and create operations.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens/{id}"),
            path_params=[param[str]("serviceAccountId", service_account_id), param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ServiceAccountToken],
            error_mapper=get_service_account_token_error_mapper,
            request_options=request_options,
        )

    def list_service_account_tokens(
        self, service_account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ServiceAccountTokensResponse, ListServiceAccountTokensErrorBody]:
        """Returns the service account's non-deleted API tokens in a single unpaginated ``items`` array, at most 10.
        Secret material is never returned here — ``accessToken`` is shown only once, by the create operation. Requires
        the ``serviceAccountViewer`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens"),
            path_params=[param[str]("serviceAccountId", service_account_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ServiceAccountTokensResponse],
            error_mapper=list_service_account_tokens_error_mapper,
            request_options=request_options,
        )

    def list_service_accounts(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ServiceAccountsResponse, ListServiceAccountsErrorBody]:
        """Returns every service account owned by the authenticated customer in a single unpaginated ``items`` array, in
        no guaranteed order. Requires the ``serviceAccountViewer`` permission.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/iam/v1/service-accounts"),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ServiceAccountsResponse],
            error_mapper=list_service_accounts_error_mapper,
            request_options=request_options,
        )

    def update_service_account(
        self,
        id_: str,
        if_match: str,
        idempotency_key: str,
        body: UpdateServiceAccountRequest | UpdateServiceAccountRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ServiceAccount, UpdateServiceAccountErrorBody]:
        """Partially updates a service account with an ``application/merge-patch+json`` body (RFC 7396). Omitted or
        ``null`` fields stay unchanged; an explicit empty string clears ``description``. ``permissions`` replaces the
        whole list, and ``[]`` removes every permission. With ``dryRun=true`` the request goes through the same checks
        as a real update (``If-Match``, name bounds and uniqueness, permission names, caller scope) and returns the
        service account as it would look after the patch, without changing anything. Requires the
        ``serviceAccountManager`` permission.

        Args:
            id_: Service account ID, as returned in the id field by the list and create operations.
            if_match: The ETag of the current version, from a get, create or update response. A stale value returns 412;
                re-read the resource and retry with the new ETag.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            body: The fields to change.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/iam/v1/service-accounts/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("If-Match", if_match), param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[UpdateServiceAccountRequest | UpdateServiceAccountRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ServiceAccount],
            error_mapper=update_service_account_error_mapper,
            request_options=request_options,
        )

    def update_service_account_token(
        self,
        service_account_id: str,
        id_: str,
        idempotency_key: str,
        body: UpdateServiceAccountTokenRequest | UpdateServiceAccountTokenRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ServiceAccountToken, UpdateServiceAccountTokenErrorBody]:
        """Moves the token between ``active`` and ``disabled`` by setting ``state``. Disabling takes effect immediately:
        the token stops authenticating until it is re-enabled. Setting the state a token already has succeeds and
        changes nothing.

        The two directions are not symmetric. Disabling a token whose expiry has passed succeeds, but re-enabling an
        expired token returns ``422`` — expiry is final, and a new token has to be created instead. ``deleted`` and
        ``expired`` are not accepted values: a token is deleted through the delete operation, and expires on its own.

        With ``dryRun=true`` nothing is written and the response body is the token as it would look after the change, so
        a ``422`` here means a real request would also be refused. Requires the ``serviceAccountManager`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            id_: API token ID, as returned in the id field by the token list and create operations.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            body: The state to move the token to.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens/{id}"),
            path_params=[param[str]("serviceAccountId", service_account_id), param[str]("id", id_)],
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[UpdateServiceAccountTokenRequest | UpdateServiceAccountTokenRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ServiceAccountToken],
            error_mapper=update_service_account_token_error_mapper,
            request_options=request_options,
        )


class AsyncServiceAccountsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_service_account(
        self,
        idempotency_key: str,
        body: CreateServiceAccountRequest | CreateServiceAccountRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ServiceAccount, CreateServiceAccountErrorBody]:
        """Creates a service account owned by the authenticated customer. It cannot authenticate anything until it has
        an API token; mint one with the ``api-tokens`` sub-resource. Returns ``409`` when another service account of the
        customer already uses ``name``. With ``dryRun=true`` the request goes through the same checks as a real create
        (name bounds and uniqueness, permission names, caller scope) and returns the same errors without creating
        anything. When the caller authenticates with a service account token, ``createdBy``, ``createdByEmail`` and
        ``createdByUserId`` are ``null``. Requires the ``serviceAccountCreator`` permission.

        Args:
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            body: The service account to create.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/iam/v1/service-accounts"),
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[CreateServiceAccountRequest | CreateServiceAccountRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ServiceAccount],
            error_mapper=create_service_account_error_mapper,
            request_options=request_options,
        )

    async def create_service_account_token(
        self,
        service_account_id: str,
        idempotency_key: str,
        body: CreateServiceAccountTokenRequest | CreateServiceAccountTokenRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateServiceAccountTokenResponse, CreateServiceAccountTokenErrorBody]:
        """Mints an API token for the service account and returns its ``accessToken`` once. The token inherits the
        service account's permissions as they stand at creation; there is no per-token scoping. Returns ``409`` when the
        service account already has a token of the same name, and ``422`` at the cap of 10 tokens.

        ``dryRun=true`` checks the name bounds only, then returns a preview without creating anything. It does **not**
        verify that the service account exists, that the name is unused, or that the account is under the token cap, so
        a dry run can succeed where the real create then returns ``404``, ``409`` or ``422``. Requires the
        ``serviceAccountCreator`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            body: The API token to create.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens"),
            path_params=[param[str]("serviceAccountId", service_account_id)],
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[CreateServiceAccountTokenRequest | CreateServiceAccountTokenRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CreateServiceAccountTokenResponse],
            error_mapper=create_service_account_token_error_mapper,
            request_options=request_options,
        )

    async def delete_service_account(
        self,
        id_: str,
        if_match: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteServiceAccountErrorBody]:
        """Permanently deletes a service account and all of its API tokens, which stop authenticating immediately.
        Deleting an ID that no longer exists returns ``404``. Requires the ``serviceAccountManager`` permission.

        Args:
            id_: Service account ID, as returned in the id field by the list and create operations.
            if_match: The ETag of the current version, from a get, create or update response. A stale value returns 412;
                re-read the resource and retry with the new ETag.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/iam/v1/service-accounts/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("If-Match", if_match), param[str]("Idempotency-Key", idempotency_key)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=delete_service_account_error_mapper,
            request_options=request_options,
        )

    async def delete_service_account_token(
        self,
        service_account_id: str,
        id_: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteServiceAccountTokenErrorBody]:
        """Permanently deletes an API token, which stops authenticating immediately. This cannot be undone. Deleting an
        ID that no longer exists returns ``404``. Requires the ``serviceAccountManager`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            id_: API token ID, as returned in the id field by the token list and create operations.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens/{id}"),
            path_params=[param[str]("serviceAccountId", service_account_id), param[str]("id", id_)],
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=delete_service_account_token_error_mapper,
            request_options=request_options,
        )

    async def get_service_account(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ServiceAccount, GetServiceAccountErrorBody]:
        """Returns a service account owned by the authenticated customer; an ID that belongs to another customer returns
        ``404``. The ``ETag`` response header carries the value to send in ``If-Match`` on update and delete. Requires
        the ``serviceAccountViewer`` permission.

        Args:
            id_: Service account ID, as returned in the id field by the list and create operations.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/iam/v1/service-accounts/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ServiceAccount],
            error_mapper=get_service_account_error_mapper,
            request_options=request_options,
        )

    async def get_service_account_token(
        self, service_account_id: str, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ServiceAccountToken, GetServiceAccountTokenErrorBody]:
        """Returns one API token of the service account; an ID that belongs to another customer returns ``404``.
        ``accessToken`` is not included — it is shown only once, by the create operation. Requires the
        ``serviceAccountViewer`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            id_: API token ID, as returned in the id field by the token list and create operations.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens/{id}"),
            path_params=[param[str]("serviceAccountId", service_account_id), param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ServiceAccountToken],
            error_mapper=get_service_account_token_error_mapper,
            request_options=request_options,
        )

    async def list_service_account_tokens(
        self, service_account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ServiceAccountTokensResponse, ListServiceAccountTokensErrorBody]:
        """Returns the service account's non-deleted API tokens in a single unpaginated ``items`` array, at most 10.
        Secret material is never returned here — ``accessToken`` is shown only once, by the create operation. Requires
        the ``serviceAccountViewer`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens"),
            path_params=[param[str]("serviceAccountId", service_account_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ServiceAccountTokensResponse],
            error_mapper=list_service_account_tokens_error_mapper,
            request_options=request_options,
        )

    async def list_service_accounts(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ServiceAccountsResponse, ListServiceAccountsErrorBody]:
        """Returns every service account owned by the authenticated customer in a single unpaginated ``items`` array, in
        no guaranteed order. Requires the ``serviceAccountViewer`` permission.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/iam/v1/service-accounts"),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ServiceAccountsResponse],
            error_mapper=list_service_accounts_error_mapper,
            request_options=request_options,
        )

    async def update_service_account(
        self,
        id_: str,
        if_match: str,
        idempotency_key: str,
        body: UpdateServiceAccountRequest | UpdateServiceAccountRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ServiceAccount, UpdateServiceAccountErrorBody]:
        """Partially updates a service account with an ``application/merge-patch+json`` body (RFC 7396). Omitted or
        ``null`` fields stay unchanged; an explicit empty string clears ``description``. ``permissions`` replaces the
        whole list, and ``[]`` removes every permission. With ``dryRun=true`` the request goes through the same checks
        as a real update (``If-Match``, name bounds and uniqueness, permission names, caller scope) and returns the
        service account as it would look after the patch, without changing anything. Requires the
        ``serviceAccountManager`` permission.

        Args:
            id_: Service account ID, as returned in the id field by the list and create operations.
            if_match: The ETag of the current version, from a get, create or update response. A stale value returns 412;
                re-read the resource and retry with the new ETag.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            body: The fields to change.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/iam/v1/service-accounts/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("If-Match", if_match), param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[UpdateServiceAccountRequest | UpdateServiceAccountRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ServiceAccount],
            error_mapper=update_service_account_error_mapper,
            request_options=request_options,
        )

    async def update_service_account_token(
        self,
        service_account_id: str,
        id_: str,
        idempotency_key: str,
        body: UpdateServiceAccountTokenRequest | UpdateServiceAccountTokenRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ServiceAccountToken, UpdateServiceAccountTokenErrorBody]:
        """Moves the token between ``active`` and ``disabled`` by setting ``state``. Disabling takes effect immediately:
        the token stops authenticating until it is re-enabled. Setting the state a token already has succeeds and
        changes nothing.

        The two directions are not symmetric. Disabling a token whose expiry has passed succeeds, but re-enabling an
        expired token returns ``422`` — expiry is final, and a new token has to be created instead. ``deleted`` and
        ``expired`` are not accepted values: a token is deleted through the delete operation, and expires on its own.

        With ``dryRun=true`` nothing is written and the response body is the token as it would look after the change, so
        a ``422`` here means a real request would also be refused. Requires the ``serviceAccountManager`` permission.

        Args:
            service_account_id: ID of the service account that owns the token, as returned in the id field by the
                service account list and create operations.
            id_: API token ID, as returned in the id field by the token list and create operations.
            idempotency_key: Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
                returns the stored response instead of repeating the operation; the key is kept for 24 hours.
            body: The state to move the token to.
            dry_run: If true, validates the request and returns the would-be result without applying it. The response
                then carries the X-Dry-Run header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens/{id}"),
            path_params=[param[str]("serviceAccountId", service_account_id), param[str]("id", id_)],
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[UpdateServiceAccountTokenRequest | UpdateServiceAccountTokenRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ServiceAccountToken],
            error_mapper=update_service_account_token_error_mapper,
            request_options=request_options,
        )
