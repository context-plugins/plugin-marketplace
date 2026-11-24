from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncFileInput,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileInput,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    file_part,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.create_statement_error import CreateStatementErrorBody, create_statement_error_mapper
from ..models.users_statements_response import UsersStatementsResponse
from ..server.server import Server


class Statements:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = StatementsWithRawResponse(client, server, auth)

    def create_statement(
        self,
        user_id: str,
        institution_id: str,
        statement: FileInput,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UsersStatementsResponse:
        """Create a new statement by uploading an official PDF bank statement or CSV file. The server will create a job
        that processes the following steps:
        1. **verify-credentials**: Verify the file, validate the layout, and attempt to parse the statement.
        2. **retrieve-accounts**: Retrieve the list of accounts and their details (account number, name, balances).
        3. **retrieve-transactions**: Fetch the transactions for each account.

        The status of each step can be checked by querying the Retrieve a job.

        > Note that this function is not supported in sandbox environments (AU00000).

        For CSV file format specifications, please contact our support team.

        > 🚧
        >
        > Note that the time it takes to complete the processes above will vary depending on the volume of data along
            with the complexity of the bank statement. As a rough guide this entire process could take anywhere between
            10 - 30 secs. Upload multiple statements in parallel to provide the best user experience

        Args:
            user_id: The unique identifier of the user
            institution_id: The identifier of the institution to which the statement relates (e.g., "AU01001").
                **Note**: Sandbox institutions (AU00000) do not support file uploads.
            statement: The official PDF bank statement or CSV file to be uploaded. CSV files must conform to the file
                specification provided by Basiq.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job resource created successfully

        Raises:
            ApiError: Bad request due to missing or invalid parameters Forbidden access due to insufficient permissions
                Resource not found Internal server error Service unavailable ``error`` is ``UsersStatements400Error1 |
                UsersStatements403Error1 | UsersStatements404Error1 | UsersStatements500Error1 |
                UsersStatements503Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.create_statement(
                user_id, institution_id, statement, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> StatementsWithRawResponse:
        return self._with_raw_response


class AsyncStatements:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncStatementsWithRawResponse(client, server, auth)

    async def create_statement(
        self,
        user_id: str,
        institution_id: str,
        statement: AsyncFileInput,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UsersStatementsResponse:
        """Create a new statement by uploading an official PDF bank statement or CSV file. The server will create a job
        that processes the following steps:
        1. **verify-credentials**: Verify the file, validate the layout, and attempt to parse the statement.
        2. **retrieve-accounts**: Retrieve the list of accounts and their details (account number, name, balances).
        3. **retrieve-transactions**: Fetch the transactions for each account.

        The status of each step can be checked by querying the Retrieve a job.

        > Note that this function is not supported in sandbox environments (AU00000).

        For CSV file format specifications, please contact our support team.

        > 🚧
        >
        > Note that the time it takes to complete the processes above will vary depending on the volume of data along
            with the complexity of the bank statement. As a rough guide this entire process could take anywhere between
            10 - 30 secs. Upload multiple statements in parallel to provide the best user experience

        Args:
            user_id: The unique identifier of the user
            institution_id: The identifier of the institution to which the statement relates (e.g., "AU01001").
                **Note**: Sandbox institutions (AU00000) do not support file uploads.
            statement: The official PDF bank statement or CSV file to be uploaded. CSV files must conform to the file
                specification provided by Basiq.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job resource created successfully

        Raises:
            ApiError: Bad request due to missing or invalid parameters Forbidden access due to insufficient permissions
                Resource not found Internal server error Service unavailable ``error`` is ``UsersStatements400Error1 |
                UsersStatements403Error1 | UsersStatements404Error1 | UsersStatements500Error1 |
                UsersStatements503Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.create_statement(
                user_id, institution_id, statement, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncStatementsWithRawResponse:
        return self._with_raw_response


class StatementsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_statement(
        self,
        user_id: str,
        institution_id: str,
        statement: FileInput,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UsersStatementsResponse, CreateStatementErrorBody]:
        """Create a new statement by uploading an official PDF bank statement or CSV file. The server will create a job
        that processes the following steps:
        1. **verify-credentials**: Verify the file, validate the layout, and attempt to parse the statement.
        2. **retrieve-accounts**: Retrieve the list of accounts and their details (account number, name, balances).
        3. **retrieve-transactions**: Fetch the transactions for each account.

        The status of each step can be checked by querying the Retrieve a job.

        > Note that this function is not supported in sandbox environments (AU00000).

        For CSV file format specifications, please contact our support team.

        > 🚧
        >
        > Note that the time it takes to complete the processes above will vary depending on the volume of data along
            with the complexity of the bank statement. As a rough guide this entire process could take anywhere between
            10 - 30 secs. Upload multiple statements in parallel to provide the best user experience

        Args:
            user_id: The unique identifier of the user
            institution_id: The identifier of the institution to which the statement relates (e.g., "AU01001").
                **Note**: Sandbox institutions (AU00000) do not support file uploads.
            statement: The official PDF bank statement or CSV file to be uploaded. CSV files must conform to the file
                specification provided by Basiq.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/statements"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(param[str]("institutionId", institution_id), file_part("statement", statement)),
            auth_scheme=AnySchemes(self._auth.api_key, self._auth.services_token),
            decoder=json_decoder[UsersStatementsResponse],
            error_mapper=create_statement_error_mapper,
            request_options=request_options,
        )


class AsyncStatementsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_statement(
        self,
        user_id: str,
        institution_id: str,
        statement: AsyncFileInput,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UsersStatementsResponse, CreateStatementErrorBody]:
        """Create a new statement by uploading an official PDF bank statement or CSV file. The server will create a job
        that processes the following steps:
        1. **verify-credentials**: Verify the file, validate the layout, and attempt to parse the statement.
        2. **retrieve-accounts**: Retrieve the list of accounts and their details (account number, name, balances).
        3. **retrieve-transactions**: Fetch the transactions for each account.

        The status of each step can be checked by querying the Retrieve a job.

        > Note that this function is not supported in sandbox environments (AU00000).

        For CSV file format specifications, please contact our support team.

        > 🚧
        >
        > Note that the time it takes to complete the processes above will vary depending on the volume of data along
            with the complexity of the bank statement. As a rough guide this entire process could take anywhere between
            10 - 30 secs. Upload multiple statements in parallel to provide the best user experience

        Args:
            user_id: The unique identifier of the user
            institution_id: The identifier of the institution to which the statement relates (e.g., "AU01001").
                **Note**: Sandbox institutions (AU00000) do not support file uploads.
            statement: The official PDF bank statement or CSV file to be uploaded. CSV files must conform to the file
                specification provided by Basiq.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/statements"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(param[str]("institutionId", institution_id), file_part("statement", statement)),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, self._auth.services_token),
            decoder=async_json_decoder[UsersStatementsResponse],
            error_mapper=create_statement_error_mapper,
            request_options=request_options,
        )
