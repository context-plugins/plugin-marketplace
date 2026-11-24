from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
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
from ..errors.delete_api_v1_secrets_secret_id_error import (
    DeleteApiV1SecretsSecretIdErrorBody,
    delete_api_v1_secrets_secret_id_error_mapper,
)
from ..errors.get_api_v1_secrets_error import GetApiV1SecretsErrorBody, get_api_v1_secrets_error_mapper
from ..errors.get_api_v1_secrets_public_key_error import (
    GetApiV1SecretsPublicKeyErrorBody,
    get_api_v1_secrets_public_key_error_mapper,
)
from ..errors.post_api_v1_secrets_error import PostApiV1SecretsErrorBody, post_api_v1_secrets_error_mapper
from ..errors.post_api_v1_secrets_secret_id_error import (
    PostApiV1SecretsSecretIdErrorBody,
    post_api_v1_secrets_secret_id_error_mapper,
)
from ..models.public_api_create_secret_request_dto import (
    PublicApiCreateSecretRequestDto,
    PublicApiCreateSecretRequestDtoDict,
)
from ..models.public_api_create_secret_response import PublicApiCreateSecretResponse
from ..models.public_api_delete_secret_response import PublicApiDeleteSecretResponse
from ..models.public_api_get_encryption_key_response import PublicApiGetEncryptionKeyResponse
from ..models.public_api_list_secrets_response import PublicApiListSecretsResponse
from ..models.public_api_update_secret_request_dto import (
    PublicApiUpdateSecretRequestDto,
    PublicApiUpdateSecretRequestDtoDict,
)
from ..models.public_api_update_secret_response import PublicApiUpdateSecretResponse
from ..server.server import Server


class Secrets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SecretsWithRawResponse(client, server, auth)

    def delete_api_v1_secrets_secret_id(
        self, secret_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiDeleteSecretResponse:
        """Deletes an existing secret.

        The secret cannot be deleted if it is referenced by a datasource configuration.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            secret_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_api_v1_secrets_secret_id(secret_id, request_options=request_options)
        )

    def get_api_v1_secrets(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiListSecretsResponse:
        """This endpoint allows you to list secrets in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Supply a string value to filter secrets by name (case-insensitive partial match).

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_secrets(
                page=page, search=search, size=size, request_options=request_options
            ),
        )

    def get_api_v1_secrets_public_key(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiGetEncryptionKeyResponse:
        """Returns the RSA public key in JWK (JSON Web Key) format, used for client-side encryption of secret values.

        ## Usage

        When creating or updating a secret, the secret value must be encrypted client-side before sending it to the API.
        This endpoint provides the RSA public key needed for that encryption.

        ## Encryption workflow

        1. Fetch this public key.

        2. Generate a random AES-256-GCM key (32 bytes) and initialization vector (IV, 12 bytes).

        3. Encrypt the secret value using AES-256-GCM with the generated key and IV. Base64-encode the ciphertext and
            prefix it with ``encrypted_``. This becomes the ``encryptedValue`` field.

        4. Export the raw AES key and IV as base64 strings and concatenate them as ``{base64_key}:::{base64_iv}``.
            Encrypt this string using RSA-OAEP (SHA-256) with this public key. Base64-encode the result. This becomes
            the ``encryptionKey`` field.

        5. Use the ``encryptedValue`` and ``encryptionKey`` in the create or update secret request.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized Forbidden Too many requests Internal server error ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_secrets_public_key(request_options=request_options))

    def post_api_v1_secrets(
        self,
        body: PublicApiCreateSecretRequestDto | PublicApiCreateSecretRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiCreateSecretResponse:
        """Creates a new secret in your organization. Secrets store encrypted credentials that can be referenced in
        datasource configurations using ``${secret.NAME}`` placeholders, keeping sensitive values out of plain text.

        ## Encryption

        Secret values must be encrypted **client-side** before sending them to this endpoint. This enables a zero-trust
        design, where Soda never decrypts the secret. Decryption happens only during scan execution, within the runner.

        Use the ``GET /api/v1/secretsPublicKey`` endpoint to obtain the server's RSA public key. The encryption uses a
        two-layer scheme:

        1. Fetch the RSA public key from ``GET /api/v1/secretsPublicKey``.

        2. Generate a random AES-256-GCM key (32 bytes) and initialization vector (IV, 12 bytes).

        3. Encrypt the secret value using AES-256-GCM with the generated key and IV. Base64-encode the ciphertext and
            prefix it with ``encrypted_``. This becomes the ``encryptedValue`` field.

        4. Export the raw AES key and IV as base64 strings and concatenate them as ``{base64_key}:::{base64_iv}``.
            Encrypt this string using RSA-OAEP (SHA-256) with the public key from step 1. Base64-encode the result. This
            becomes the ``encryptionKey`` field.

        ## Constraints

        - The secret ``name`` must not contain whitespace and must be unique within the organization.

        - Both ``encryptionKey`` and ``encryptedValue`` are required.

        - The organization must have the contracts feature enabled and the secure store must not be disabled.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_secrets(body, request_options=request_options))

    def post_api_v1_secrets_secret_id(
        self,
        secret_id: str,
        body: PublicApiUpdateSecretRequestDto | PublicApiUpdateSecretRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateSecretResponse:
        """Updates the encrypted value of an existing secret. The secret name cannot be changed.

        Both ``encryptionKey`` and ``encryptedValue`` must be provided together — you cannot update one without the
        other.

        ## Encryption

        The new secret value must be encrypted **client-side** using the same two-layer encryption scheme as creation.
        See the ``POST /api/v1/secrets`` (Create a secret) endpoint for the full encryption workflow.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            secret_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_secrets_secret_id(secret_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> SecretsWithRawResponse:
        return self._with_raw_response


class AsyncSecrets:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSecretsWithRawResponse(client, server, auth)

    async def delete_api_v1_secrets_secret_id(
        self, secret_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiDeleteSecretResponse:
        """Deletes an existing secret.

        The secret cannot be deleted if it is referenced by a datasource configuration.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            secret_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_api_v1_secrets_secret_id(secret_id, request_options=request_options)
        )

    async def get_api_v1_secrets(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiListSecretsResponse:
        """This endpoint allows you to list secrets in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Supply a string value to filter secrets by name (case-insensitive partial match).

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_secrets(
                page=page, search=search, size=size, request_options=request_options
            ),
        )

    async def get_api_v1_secrets_public_key(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiGetEncryptionKeyResponse:
        """Returns the RSA public key in JWK (JSON Web Key) format, used for client-side encryption of secret values.

        ## Usage

        When creating or updating a secret, the secret value must be encrypted client-side before sending it to the API.
        This endpoint provides the RSA public key needed for that encryption.

        ## Encryption workflow

        1. Fetch this public key.

        2. Generate a random AES-256-GCM key (32 bytes) and initialization vector (IV, 12 bytes).

        3. Encrypt the secret value using AES-256-GCM with the generated key and IV. Base64-encode the ciphertext and
            prefix it with ``encrypted_``. This becomes the ``encryptedValue`` field.

        4. Export the raw AES key and IV as base64 strings and concatenate them as ``{base64_key}:::{base64_iv}``.
            Encrypt this string using RSA-OAEP (SHA-256) with this public key. Base64-encode the result. This becomes
            the ``encryptionKey`` field.

        5. Use the ``encryptedValue`` and ``encryptionKey`` in the create or update secret request.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized Forbidden Too many requests Internal server error ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_secrets_public_key(request_options=request_options))

    async def post_api_v1_secrets(
        self,
        body: PublicApiCreateSecretRequestDto | PublicApiCreateSecretRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiCreateSecretResponse:
        """Creates a new secret in your organization. Secrets store encrypted credentials that can be referenced in
        datasource configurations using ``${secret.NAME}`` placeholders, keeping sensitive values out of plain text.

        ## Encryption

        Secret values must be encrypted **client-side** before sending them to this endpoint. This enables a zero-trust
        design, where Soda never decrypts the secret. Decryption happens only during scan execution, within the runner.

        Use the ``GET /api/v1/secretsPublicKey`` endpoint to obtain the server's RSA public key. The encryption uses a
        two-layer scheme:

        1. Fetch the RSA public key from ``GET /api/v1/secretsPublicKey``.

        2. Generate a random AES-256-GCM key (32 bytes) and initialization vector (IV, 12 bytes).

        3. Encrypt the secret value using AES-256-GCM with the generated key and IV. Base64-encode the ciphertext and
            prefix it with ``encrypted_``. This becomes the ``encryptedValue`` field.

        4. Export the raw AES key and IV as base64 strings and concatenate them as ``{base64_key}:::{base64_iv}``.
            Encrypt this string using RSA-OAEP (SHA-256) with the public key from step 1. Base64-encode the result. This
            becomes the ``encryptionKey`` field.

        ## Constraints

        - The secret ``name`` must not contain whitespace and must be unique within the organization.

        - Both ``encryptionKey`` and ``encryptedValue`` are required.

        - The organization must have the contracts feature enabled and the secure store must not be disabled.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_secrets(body, request_options=request_options))

    async def post_api_v1_secrets_secret_id(
        self,
        secret_id: str,
        body: PublicApiUpdateSecretRequestDto | PublicApiUpdateSecretRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateSecretResponse:
        """Updates the encrypted value of an existing secret. The secret name cannot be changed.

        Both ``encryptionKey`` and ``encryptedValue`` must be provided together — you cannot update one without the
        other.

        ## Encryption

        The new secret value must be encrypted **client-side** using the same two-layer encryption scheme as creation.
        See the ``POST /api/v1/secrets`` (Create a secret) endpoint for the full encryption workflow.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            secret_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_secrets_secret_id(
                secret_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSecretsWithRawResponse:
        return self._with_raw_response


class SecretsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_api_v1_secrets_secret_id(
        self, secret_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteSecretResponse, DeleteApiV1SecretsSecretIdErrorBody]:
        """Deletes an existing secret.

        The secret cannot be deleted if it is referenced by a datasource configuration.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            secret_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/secrets/{secretId}"),
            path_params=[param[str]("secretId", secret_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDeleteSecretResponse],
            error_mapper=delete_api_v1_secrets_secret_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_secrets(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListSecretsResponse, GetApiV1SecretsErrorBody]:
        """This endpoint allows you to list secrets in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Supply a string value to filter secrets by name (case-insensitive partial match).

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/secrets"),
            query_params=[
                param[int | None]("page", page), param[str | None]("search", search), param[int | None]("size", size)
            ],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiListSecretsResponse],
            error_mapper=get_api_v1_secrets_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_secrets_public_key(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiGetEncryptionKeyResponse, GetApiV1SecretsPublicKeyErrorBody]:
        """Returns the RSA public key in JWK (JSON Web Key) format, used for client-side encryption of secret values.

        ## Usage

        When creating or updating a secret, the secret value must be encrypted client-side before sending it to the API.
        This endpoint provides the RSA public key needed for that encryption.

        ## Encryption workflow

        1. Fetch this public key.

        2. Generate a random AES-256-GCM key (32 bytes) and initialization vector (IV, 12 bytes).

        3. Encrypt the secret value using AES-256-GCM with the generated key and IV. Base64-encode the ciphertext and
            prefix it with ``encrypted_``. This becomes the ``encryptedValue`` field.

        4. Export the raw AES key and IV as base64 strings and concatenate them as ``{base64_key}:::{base64_iv}``.
            Encrypt this string using RSA-OAEP (SHA-256) with this public key. Base64-encode the result. This becomes
            the ``encryptionKey`` field.

        5. Use the ``encryptedValue`` and ``encryptionKey`` in the create or update secret request.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/secretsPublicKey"),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiGetEncryptionKeyResponse],
            error_mapper=get_api_v1_secrets_public_key_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_secrets(
        self,
        body: PublicApiCreateSecretRequestDto | PublicApiCreateSecretRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiCreateSecretResponse, PostApiV1SecretsErrorBody]:
        """Creates a new secret in your organization. Secrets store encrypted credentials that can be referenced in
        datasource configurations using ``${secret.NAME}`` placeholders, keeping sensitive values out of plain text.

        ## Encryption

        Secret values must be encrypted **client-side** before sending them to this endpoint. This enables a zero-trust
        design, where Soda never decrypts the secret. Decryption happens only during scan execution, within the runner.

        Use the ``GET /api/v1/secretsPublicKey`` endpoint to obtain the server's RSA public key. The encryption uses a
        two-layer scheme:

        1. Fetch the RSA public key from ``GET /api/v1/secretsPublicKey``.

        2. Generate a random AES-256-GCM key (32 bytes) and initialization vector (IV, 12 bytes).

        3. Encrypt the secret value using AES-256-GCM with the generated key and IV. Base64-encode the ciphertext and
            prefix it with ``encrypted_``. This becomes the ``encryptedValue`` field.

        4. Export the raw AES key and IV as base64 strings and concatenate them as ``{base64_key}:::{base64_iv}``.
            Encrypt this string using RSA-OAEP (SHA-256) with the public key from step 1. Base64-encode the result. This
            becomes the ``encryptionKey`` field.

        ## Constraints

        - The secret ``name`` must not contain whitespace and must be unique within the organization.

        - Both ``encryptionKey`` and ``encryptedValue`` are required.

        - The organization must have the contracts feature enabled and the secure store must not be disabled.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/secrets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiCreateSecretRequestDto | PublicApiCreateSecretRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiCreateSecretResponse],
            error_mapper=post_api_v1_secrets_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_secrets_secret_id(
        self,
        secret_id: str,
        body: PublicApiUpdateSecretRequestDto | PublicApiUpdateSecretRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUpdateSecretResponse, PostApiV1SecretsSecretIdErrorBody]:
        """Updates the encrypted value of an existing secret. The secret name cannot be changed.

        Both ``encryptionKey`` and ``encryptedValue`` must be provided together — you cannot update one without the
        other.

        ## Encryption

        The new secret value must be encrypted **client-side** using the same two-layer encryption scheme as creation.
        See the ``POST /api/v1/secrets`` (Create a secret) endpoint for the full encryption workflow.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            secret_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/secrets/{secretId}"),
            path_params=[param[str]("secretId", secret_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiUpdateSecretRequestDto | PublicApiUpdateSecretRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiUpdateSecretResponse],
            error_mapper=post_api_v1_secrets_secret_id_error_mapper,
            request_options=request_options,
        )


class AsyncSecretsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_api_v1_secrets_secret_id(
        self, secret_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteSecretResponse, DeleteApiV1SecretsSecretIdErrorBody]:
        """Deletes an existing secret.

        The secret cannot be deleted if it is referenced by a datasource configuration.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            secret_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/secrets/{secretId}"),
            path_params=[param[str]("secretId", secret_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDeleteSecretResponse],
            error_mapper=delete_api_v1_secrets_secret_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_secrets(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListSecretsResponse, GetApiV1SecretsErrorBody]:
        """This endpoint allows you to list secrets in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Supply a string value to filter secrets by name (case-insensitive partial match).

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/secrets"),
            query_params=[
                param[int | None]("page", page), param[str | None]("search", search), param[int | None]("size", size)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiListSecretsResponse],
            error_mapper=get_api_v1_secrets_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_secrets_public_key(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiGetEncryptionKeyResponse, GetApiV1SecretsPublicKeyErrorBody]:
        """Returns the RSA public key in JWK (JSON Web Key) format, used for client-side encryption of secret values.

        ## Usage

        When creating or updating a secret, the secret value must be encrypted client-side before sending it to the API.
        This endpoint provides the RSA public key needed for that encryption.

        ## Encryption workflow

        1. Fetch this public key.

        2. Generate a random AES-256-GCM key (32 bytes) and initialization vector (IV, 12 bytes).

        3. Encrypt the secret value using AES-256-GCM with the generated key and IV. Base64-encode the ciphertext and
            prefix it with ``encrypted_``. This becomes the ``encryptedValue`` field.

        4. Export the raw AES key and IV as base64 strings and concatenate them as ``{base64_key}:::{base64_iv}``.
            Encrypt this string using RSA-OAEP (SHA-256) with this public key. Base64-encode the result. This becomes
            the ``encryptionKey`` field.

        5. Use the ``encryptedValue`` and ``encryptionKey`` in the create or update secret request.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/secretsPublicKey"),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiGetEncryptionKeyResponse],
            error_mapper=get_api_v1_secrets_public_key_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_secrets(
        self,
        body: PublicApiCreateSecretRequestDto | PublicApiCreateSecretRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiCreateSecretResponse, PostApiV1SecretsErrorBody]:
        """Creates a new secret in your organization. Secrets store encrypted credentials that can be referenced in
        datasource configurations using ``${secret.NAME}`` placeholders, keeping sensitive values out of plain text.

        ## Encryption

        Secret values must be encrypted **client-side** before sending them to this endpoint. This enables a zero-trust
        design, where Soda never decrypts the secret. Decryption happens only during scan execution, within the runner.

        Use the ``GET /api/v1/secretsPublicKey`` endpoint to obtain the server's RSA public key. The encryption uses a
        two-layer scheme:

        1. Fetch the RSA public key from ``GET /api/v1/secretsPublicKey``.

        2. Generate a random AES-256-GCM key (32 bytes) and initialization vector (IV, 12 bytes).

        3. Encrypt the secret value using AES-256-GCM with the generated key and IV. Base64-encode the ciphertext and
            prefix it with ``encrypted_``. This becomes the ``encryptedValue`` field.

        4. Export the raw AES key and IV as base64 strings and concatenate them as ``{base64_key}:::{base64_iv}``.
            Encrypt this string using RSA-OAEP (SHA-256) with the public key from step 1. Base64-encode the result. This
            becomes the ``encryptionKey`` field.

        ## Constraints

        - The secret ``name`` must not contain whitespace and must be unique within the organization.

        - Both ``encryptionKey`` and ``encryptedValue`` are required.

        - The organization must have the contracts feature enabled and the secure store must not be disabled.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/secrets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiCreateSecretRequestDto | PublicApiCreateSecretRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiCreateSecretResponse],
            error_mapper=post_api_v1_secrets_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_secrets_secret_id(
        self,
        secret_id: str,
        body: PublicApiUpdateSecretRequestDto | PublicApiUpdateSecretRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUpdateSecretResponse, PostApiV1SecretsSecretIdErrorBody]:
        """Updates the encrypted value of an existing secret. The secret name cannot be changed.

        Both ``encryptionKey`` and ``encryptedValue`` must be provided together — you cannot update one without the
        other.

        ## Encryption

        The new secret value must be encrypted **client-side** using the same two-layer encryption scheme as creation.
        See the ``POST /api/v1/secrets`` (Create a secret) endpoint for the full encryption workflow.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Secrets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            secret_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/secrets/{secretId}"),
            path_params=[param[str]("secretId", secret_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiUpdateSecretRequestDto | PublicApiUpdateSecretRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiUpdateSecretResponse],
            error_mapper=post_api_v1_secrets_secret_id_error_mapper,
            request_options=request_options,
        )
