from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.read_patient_error import ReadPatientErrorBody, read_patient_error_mapper
from ..models.bundle import Bundle
from ..models.patient import Patient, PatientDict
from ..server.server import Server


class PatientApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PatientApiWithRawResponse(client, server, auth)

    def create_patient(
        self, body: Patient | PatientDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Patient:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_patient(body, request_options=request_options))

    def patient_everything(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Bundle:
        """FHIR $everything operation returning a Bundle of all resources in the patient compartment, including
        federated records retrieved across the national exchange network.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A FHIR Bundle of patient-scoped resources.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.patient_everything(id_, request_options=request_options))

    def read_patient(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Patient:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: A FHIR OperationOutcome describing an error. ``error`` is ``OperationOutcome | RawError``."""
        return unwrap(self._with_raw_response.read_patient(id_, request_options=request_options))

    def search_patients(
        self,
        *,
        identifier: str | None = None,
        name: str | None = None,
        birthdate: Date | None = None,
        gender: str | None = None,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Bundle:
        """Send a ``GET`` request.

        Args:
            identifier: A resource identifier (system|value).
            name: A portion of the name.
            birthdate: Value sent with the request.
            gender: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A FHIR Bundle of matching Patient resources.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.search_patients(
                identifier=identifier,
                name=name,
                birthdate=birthdate,
                gender=gender,
                count=count,
                request_options=request_options,
            ),
        )

    def update_patient(
        self, id_: str, body: Patient | PatientDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Patient:
        """Send a ``PUT`` request.

        Args:
            id_: The logical id of the resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_patient(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> PatientApiWithRawResponse:
        return self._with_raw_response


class AsyncPatientApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPatientApiWithRawResponse(client, server, auth)

    async def create_patient(
        self, body: Patient | PatientDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Patient:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_patient(body, request_options=request_options))

    async def patient_everything(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Bundle:
        """FHIR $everything operation returning a Bundle of all resources in the patient compartment, including
        federated records retrieved across the national exchange network.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A FHIR Bundle of patient-scoped resources.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.patient_everything(id_, request_options=request_options))

    async def read_patient(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Patient:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: A FHIR OperationOutcome describing an error. ``error`` is ``OperationOutcome | RawError``."""
        return unwrap(await self._with_raw_response.read_patient(id_, request_options=request_options))

    async def search_patients(
        self,
        *,
        identifier: str | None = None,
        name: str | None = None,
        birthdate: Date | None = None,
        gender: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Bundle:
        """Send a ``GET`` request.

        Args:
            identifier: A resource identifier (system|value).
            name: A portion of the name.
            birthdate: Value sent with the request.
            gender: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A FHIR Bundle of matching Patient resources.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.search_patients(
                identifier=identifier,
                name=name,
                birthdate=birthdate,
                gender=gender,
                count=count,
                request_options=request_options,
            ),
        )

    async def update_patient(
        self, id_: str, body: Patient | PatientDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Patient:
        """Send a ``PUT`` request.

        Args:
            id_: The logical id of the resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_patient(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPatientApiWithRawResponse:
        return self._with_raw_response


class PatientApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_patient(
        self, body: Patient | PatientDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Patient, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Patient"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Patient | PatientDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Patient],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def patient_everything(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Bundle, RawError]:
        """FHIR $everything operation returning a Bundle of all resources in the patient compartment, including
        federated records retrieved across the national exchange network.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/Patient/{id}/$everything"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Bundle],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def read_patient(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Patient, ReadPatientErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/Patient/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Patient],
            error_mapper=read_patient_error_mapper,
            request_options=request_options,
        )

    def search_patients(
        self,
        *,
        identifier: str | None = None,
        name: str | None = None,
        birthdate: Date | None = None,
        gender: str | None = None,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Bundle, RawError]:
        """Send a ``GET`` request.

        Args:
            identifier: A resource identifier (system|value).
            name: A portion of the name.
            birthdate: Value sent with the request.
            gender: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/Patient"),
            query_params=[
                param[str | None]("identifier", identifier),
                param[str | None]("name", name),
                param[Date | None]("birthdate", birthdate),
                param[str | None]("gender", gender),
                param[int | None]("_count", count),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Bundle],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_patient(
        self, id_: str, body: Patient | PatientDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Patient, RawError]:
        """Send a ``PUT`` request.

        Args:
            id_: The logical id of the resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/Patient/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Patient | PatientDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Patient],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncPatientApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_patient(
        self, body: Patient | PatientDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Patient, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Patient"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Patient | PatientDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Patient],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def patient_everything(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Bundle, RawError]:
        """FHIR $everything operation returning a Bundle of all resources in the patient compartment, including
        federated records retrieved across the national exchange network.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/Patient/{id}/$everything"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Bundle],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def read_patient(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Patient, ReadPatientErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/Patient/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Patient],
            error_mapper=read_patient_error_mapper,
            request_options=request_options,
        )

    async def search_patients(
        self,
        *,
        identifier: str | None = None,
        name: str | None = None,
        birthdate: Date | None = None,
        gender: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Bundle, RawError]:
        """Send a ``GET`` request.

        Args:
            identifier: A resource identifier (system|value).
            name: A portion of the name.
            birthdate: Value sent with the request.
            gender: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/Patient"),
            query_params=[
                param[str | None]("identifier", identifier),
                param[str | None]("name", name),
                param[Date | None]("birthdate", birthdate),
                param[str | None]("gender", gender),
                param[int | None]("_count", count),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Bundle],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_patient(
        self, id_: str, body: Patient | PatientDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Patient, RawError]:
        """Send a ``PUT`` request.

        Args:
            id_: The logical id of the resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/Patient/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Patient | PatientDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Patient],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
