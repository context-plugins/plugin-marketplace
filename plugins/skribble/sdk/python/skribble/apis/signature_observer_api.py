from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.add_signature_observer_error import AddSignatureObserverErrorBody, add_signature_observer_error_mapper
from ..errors.delete_signature_observer_error import (
    DeleteSignatureObserverErrorBody,
    delete_signature_observer_error_mapper,
)
from ..errors.get_signature_observer_error import GetSignatureObserverErrorBody, get_signature_observer_error_mapper
from ..errors.list_signature_observers_error import (
    ListSignatureObserversErrorBody,
    list_signature_observers_error_mapper,
)
from ..models.unions.signature_observer import SignatureObserver, SignatureObserverDict
from ..models.unions.signature_observer_response import SignatureObserverResponse
from ..server.server import Server


class SignatureObserverApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SignatureObserverApiWithRawResponse(client, server, auth)

    def add_signature_observer(
        self,
        sr_id: UUID,
        body: SignatureObserver | SignatureObserverDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SignatureObserverResponse:
        """Adds an observer to the specified signature request.

        Observers receive email notifications about signing progress and can view documents, but cannot sign them.

        Adding a **group** observer requires the group-observers feature to be enabled for the business. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to create a SignatureObserver object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized The requested operation depends on a feature that is not enabled for the
                business. The response carries the problem type
                ``https://api.skribble.com/problem/feature-not-enabled``. Not found Too many requests Internal server
                error Service unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.add_signature_observer(sr_id, body, request_options=request_options))

    def delete_signature_observer(
        self, sr_id: UUID, observer_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the observer identified by ``OBSERVER_ID`` from the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            observer_id: Unique ID returned when the Signature Observer is created.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            self._with_raw_response.delete_signature_observer(sr_id, observer_id, request_options=request_options)
        )

    def get_signature_observer(
        self, sr_id: UUID, observer_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SignatureObserverResponse:
        """Returns the observer identified by ``OBSERVER_ID`` from the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            observer_id: Unique ID returned when the Signature Observer is created.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            self._with_raw_response.get_signature_observer(sr_id, observer_id, request_options=request_options)
        )

    def list_signature_observers(
        self, sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[SignatureObserverResponse]:
        """Returns all observers added to the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.list_signature_observers(sr_id, request_options=request_options))

    @property
    def with_raw_response(self) -> SignatureObserverApiWithRawResponse:
        return self._with_raw_response


class AsyncSignatureObserverApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSignatureObserverApiWithRawResponse(client, server, auth)

    async def add_signature_observer(
        self,
        sr_id: UUID,
        body: SignatureObserver | SignatureObserverDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SignatureObserverResponse:
        """Adds an observer to the specified signature request.

        Observers receive email notifications about signing progress and can view documents, but cannot sign them.

        Adding a **group** observer requires the group-observers feature to be enabled for the business. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to create a SignatureObserver object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized The requested operation depends on a feature that is not enabled for the
                business. The response carries the problem type
                ``https://api.skribble.com/problem/feature-not-enabled``. Not found Too many requests Internal server
                error Service unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.add_signature_observer(sr_id, body, request_options=request_options)
        )

    async def delete_signature_observer(
        self, sr_id: UUID, observer_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the observer identified by ``OBSERVER_ID`` from the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            observer_id: Unique ID returned when the Signature Observer is created.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_signature_observer(sr_id, observer_id, request_options=request_options)
        )

    async def get_signature_observer(
        self, sr_id: UUID, observer_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SignatureObserverResponse:
        """Returns the observer identified by ``OBSERVER_ID`` from the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            observer_id: Unique ID returned when the Signature Observer is created.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.get_signature_observer(sr_id, observer_id, request_options=request_options)
        )

    async def list_signature_observers(
        self, sr_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[SignatureObserverResponse]:
        """Returns all observers added to the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(await self._with_raw_response.list_signature_observers(sr_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSignatureObserverApiWithRawResponse:
        return self._with_raw_response


class SignatureObserverApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_signature_observer(
        self,
        sr_id: UUID,
        body: SignatureObserver | SignatureObserverDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SignatureObserverResponse, AddSignatureObserverErrorBody]:
        """Adds an observer to the specified signature request.

        Observers receive email notifications about signing progress and can view documents, but cannot sign them.

        Adding a **group** observer requires the group-observers feature to be enabled for the business. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to create a SignatureObserver object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/signature-requests/{SR_ID}/observers"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SignatureObserver | SignatureObserverDict](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[SignatureObserverResponse],
            error_mapper=add_signature_observer_error_mapper,
            request_options=request_options,
        )

    def delete_signature_observer(
        self, sr_id: UUID, observer_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSignatureObserverErrorBody]:
        """Deletes the observer identified by ``OBSERVER_ID`` from the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            observer_id: Unique ID returned when the Signature Observer is created.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/signature-requests/{SR_ID}/observers/{OBSERVER_ID}"),
            path_params=[param[UUID]("SR_ID", sr_id), param[str]("OBSERVER_ID", observer_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=empty_response,
            error_mapper=delete_signature_observer_error_mapper,
            request_options=request_options,
        )

    def get_signature_observer(
        self, sr_id: UUID, observer_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SignatureObserverResponse, GetSignatureObserverErrorBody]:
        """Returns the observer identified by ``OBSERVER_ID`` from the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            observer_id: Unique ID returned when the Signature Observer is created.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/signature-requests/{SR_ID}/observers/{OBSERVER_ID}"),
            path_params=[param[UUID]("SR_ID", sr_id), param[str]("OBSERVER_ID", observer_id)],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[SignatureObserverResponse],
            error_mapper=get_signature_observer_error_mapper,
            request_options=request_options,
        )

    def list_signature_observers(
        self, sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[SignatureObserverResponse], ListSignatureObserversErrorBody]:
        """Returns all observers added to the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/signature-requests/{SR_ID}/observers"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[list[SignatureObserverResponse]],
            error_mapper=list_signature_observers_error_mapper,
            request_options=request_options,
        )


class AsyncSignatureObserverApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_signature_observer(
        self,
        sr_id: UUID,
        body: SignatureObserver | SignatureObserverDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SignatureObserverResponse, AddSignatureObserverErrorBody]:
        """Adds an observer to the specified signature request.

        Observers receive email notifications about signing progress and can view documents, but cannot sign them.

        Adding a **group** observer requires the group-observers feature to be enabled for the business. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to create a SignatureObserver object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/signature-requests/{SR_ID}/observers"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SignatureObserver | SignatureObserverDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[SignatureObserverResponse],
            error_mapper=add_signature_observer_error_mapper,
            request_options=request_options,
        )

    async def delete_signature_observer(
        self, sr_id: UUID, observer_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSignatureObserverErrorBody]:
        """Deletes the observer identified by ``OBSERVER_ID`` from the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            observer_id: Unique ID returned when the Signature Observer is created.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/signature-requests/{SR_ID}/observers/{OBSERVER_ID}"),
            path_params=[param[UUID]("SR_ID", sr_id), param[str]("OBSERVER_ID", observer_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_empty_response,
            error_mapper=delete_signature_observer_error_mapper,
            request_options=request_options,
        )

    async def get_signature_observer(
        self, sr_id: UUID, observer_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SignatureObserverResponse, GetSignatureObserverErrorBody]:
        """Returns the observer identified by ``OBSERVER_ID`` from the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            observer_id: Unique ID returned when the Signature Observer is created.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/signature-requests/{SR_ID}/observers/{OBSERVER_ID}"),
            path_params=[param[UUID]("SR_ID", sr_id), param[str]("OBSERVER_ID", observer_id)],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[SignatureObserverResponse],
            error_mapper=get_signature_observer_error_mapper,
            request_options=request_options,
        )

    async def list_signature_observers(
        self, sr_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[SignatureObserverResponse], ListSignatureObserversErrorBody]:
        """Returns all observers added to the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/signature-requests/{SR_ID}/observers"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[list[SignatureObserverResponse]],
            error_mapper=list_signature_observers_error_mapper,
            request_options=request_options,
        )
