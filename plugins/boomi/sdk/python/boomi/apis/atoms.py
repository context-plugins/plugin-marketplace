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
from ..errors.delete_atom_error import DeleteAtomErrorBody, delete_atom_error_mapper
from ..errors.get_atom_error import GetAtomErrorBody, get_atom_error_mapper
from ..errors.query_atoms_error import QueryAtomsErrorBody, query_atoms_error_mapper
from ..errors.update_atom_error import UpdateAtomErrorBody, update_atom_error_mapper
from ..models.atom import Atom
from ..models.atom_input import AtomInput, AtomInputDict
from ..models.atom_query_result import AtomQueryResult
from ..models.query_request import QueryRequest, QueryRequestDict
from ..server.server import Server


class Atoms:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AtomsWithRawResponse(client, server, auth)

    def delete_atom(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Removes an Atom from the Boomi platform. The Atom must be offline before it can be deleted.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion successful.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_atom(id_, request_options=request_options))

    def get_atom(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Atom:
        """Retrieves the details of a specific Boomi Atom (runtime engine) by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The Atom object.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_atom(id_, request_options=request_options))

    def query_atoms(
        self, body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> AtomQueryResult:
        """Returns a list of Atoms matching the specified filter criteria, including online/offline status and
        environment associations.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Query results containing matching Atom objects.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.query_atoms(body, request_options=request_options))

    def update_atom(
        self, id_: str, body: AtomInput | AtomInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Atom:
        """Updates the name or purge schedule of an existing Boomi Atom.

        Args:
            id_: Unique identifier of the platform object.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated Atom object.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. The requested resource was not found. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.update_atom(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AtomsWithRawResponse:
        return self._with_raw_response


class AsyncAtoms:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAtomsWithRawResponse(client, server, auth)

    async def delete_atom(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Removes an Atom from the Boomi platform. The Atom must be offline before it can be deleted.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion successful.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.delete_atom(id_, request_options=request_options))

    async def get_atom(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Atom:
        """Retrieves the details of a specific Boomi Atom (runtime engine) by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The Atom object.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_atom(id_, request_options=request_options))

    async def query_atoms(
        self, body: QueryRequest | QueryRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AtomQueryResult:
        """Returns a list of Atoms matching the specified filter criteria, including online/offline status and
        environment associations.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Query results containing matching Atom objects.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.query_atoms(body, request_options=request_options))

    async def update_atom(
        self, id_: str, body: AtomInput | AtomInputDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Atom:
        """Updates the name or purge schedule of an existing Boomi Atom.

        Args:
            id_: Unique identifier of the platform object.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated Atom object.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. The requested resource was not found. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.update_atom(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAtomsWithRawResponse:
        return self._with_raw_response


class AtomsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_atom(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAtomErrorBody]:
        """Removes an Atom from the Boomi platform. The Atom must be offline before it can be deleted.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/Atom/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=empty_response,
            error_mapper=delete_atom_error_mapper,
            request_options=request_options,
        )

    def get_atom(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Atom, GetAtomErrorBody]:
        """Retrieves the details of a specific Boomi Atom (runtime engine) by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/Atom/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[Atom],
            error_mapper=get_atom_error_mapper,
            request_options=request_options,
        )

    def query_atoms(
        self, body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AtomQueryResult, QueryAtomsErrorBody]:
        """Returns a list of Atoms matching the specified filter criteria, including online/offline status and
        environment associations.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Atom/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QueryRequest | QueryRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[AtomQueryResult],
            error_mapper=query_atoms_error_mapper,
            request_options=request_options,
        )

    def update_atom(
        self, id_: str, body: AtomInput | AtomInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Atom, UpdateAtomErrorBody]:
        """Updates the name or purge schedule of an existing Boomi Atom.

        Args:
            id_: Unique identifier of the platform object.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Atom/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AtomInput | AtomInputDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[Atom],
            error_mapper=update_atom_error_mapper,
            request_options=request_options,
        )


class AsyncAtomsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_atom(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAtomErrorBody]:
        """Removes an Atom from the Boomi platform. The Atom must be offline before it can be deleted.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/Atom/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=async_empty_response,
            error_mapper=delete_atom_error_mapper,
            request_options=request_options,
        )

    async def get_atom(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Atom, GetAtomErrorBody]:
        """Retrieves the details of a specific Boomi Atom (runtime engine) by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/Atom/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[Atom],
            error_mapper=get_atom_error_mapper,
            request_options=request_options,
        )

    async def query_atoms(
        self, body: QueryRequest | QueryRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AtomQueryResult, QueryAtomsErrorBody]:
        """Returns a list of Atoms matching the specified filter criteria, including online/offline status and
        environment associations.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Atom/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QueryRequest | QueryRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[AtomQueryResult],
            error_mapper=query_atoms_error_mapper,
            request_options=request_options,
        )

    async def update_atom(
        self, id_: str, body: AtomInput | AtomInputDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Atom, UpdateAtomErrorBody]:
        """Updates the name or purge schedule of an existing Boomi Atom.

        Args:
            id_: Unique identifier of the platform object.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Atom/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AtomInput | AtomInputDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[Atom],
            error_mapper=update_atom_error_mapper,
            request_options=request_options,
        )
