from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType
from typing import Any
from uuid import UUID, uuid4

from typing_extensions import Self

from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseStoplightClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    ApiResult,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    SecuredRawResponse,
    json_body,
    json_decoder,
    no_auth,
    param,
    unwrap,
)
from .errors.get_versions_version_id_export_format_error import (
    GetVersionsVersionIdExportFormatErrorBody,
    get_versions_version_id_export_format_error_mapper,
)
from .errors.post_versions_publish_anon_error import (
    PostVersionsPublishAnonErrorBody,
    post_versions_publish_anon_error_mapper,
)
from .errors.post_versions_version_id_publish_error import (
    PostVersionsVersionIdPublishErrorBody,
    post_versions_version_id_publish_error_mapper,
)
from .errors.put_versions_version_id_import_error import (
    PutVersionsVersionIdImportErrorBody,
    put_versions_version_id_import_error_mapper,
)
from .errors.put_versions_version_id_unpublish_error import (
    PutVersionsVersionIdUnpublishErrorBody,
    put_versions_version_id_unpublish_error_mapper,
)
from .models.enums.format import Format, FormatOrStr
from .models.versions_import_request import VersionsImportRequest, VersionsImportRequestDict
from .models.versions_import_response import VersionsImportResponse
from .models.versions_publish_anon_request import VersionsPublishAnonRequest, VersionsPublishAnonRequestDict
from .models.versions_publish_anon_response import VersionsPublishAnonResponse
from .models.versions_publish_response import VersionsPublishResponse
from .models.versions_unpublish_response import VersionsUnpublishResponse
from .server.server import Server


class StoplightClient(BaseStoplightClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        authorization: str | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "StoplightClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            authorization=ApiKeyHeaderScheme("Authorization", authorization) if authorization is not None else no_auth
        )

    @cached_property
    def with_raw_response(self) -> ApiWithRawResponse:
        return ApiWithRawResponse(self._raw_client, self._server, self._auth)

    def get_versions_version_id_export_format(
        self,
        *,
        version_id: str = "",
        format_: FormatOrStr = Format.OAS_JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Export a version to your choice of API specification.

        ### Allowed Formats:

        - oas.json
        - oas.yaml
        - raml08.yaml
        - raml10.yaml
        - stoplight.json
        - stoplight.yaml

        The stoplight format actually returns OAS (Swagger 2) with x-stoplight annotations. If you are exporting with
        the intent on importing back into Stoplight, this export format preserves the most information.

        ### Example URL:

        ``https://api.stoplight.io/v1/versions/123/export/oas.json``

        Args:
            version_id: This is the unique identifier for the version.
            format_: The specification / format that you want to export.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Any`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``Any | RawError``."""
        return unwrap(
            self.with_raw_response.get_versions_version_id_export_format(
                version_id=version_id, format_=format_, request_options=request_options
            ),
        )

    def post_versions_publish_anon(
        self,
        *,
        body: VersionsPublishAnonRequest | VersionsPublishAnonRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VersionsPublishAnonResponse:
        """Anonymously publish to API Docs.

        This endpoint will take a JSON spec or a URL to a swagger or raml spec.

        ```
        {
        "specData": {...}
        }
        ```

        or

        ```
        {
        "url": "http://petstore.swagger.io/v2/swagger.json"
        }
        ```

        The spec will be published to api-docs.io anonymously, which means you will not be able to update or remove this
        documentation.

        The response will contain a url to the published documentation.

        ```
        {
        "url": "https://swagger-petstore.api-docs.io/v1.0.0"
        }
        ```

        The limitations of anonymous publishing
        * Cannot update/remove the documentation
        * Cannot choose the subdomain
        * Cannot choose the version
        * Cannot add theming

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``VersionsPublishAnonResponse`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``Any | RawError``."""
        return unwrap(self.with_raw_response.post_versions_publish_anon(body=body, request_options=request_options))

    def post_versions_version_id_publish(
        self, version_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> VersionsPublishResponse:
        """Re-publish an API version in Stoplight. This will re-publish the given API version, with whatever publish
        settings have already been setup in the app.

        This will only work with APIs that have previously been published at least once.

        This works well with the #endpoint:957qEfc97BB5XGAeZ endpoint to augment your continuous integration processes,
        and automatically re-publish your documentation when certain events happen. Once such scenario is:

        1. Swagger is generated from your codebase, and pushed up to Github.
        2. A simple script that you write sends a request to the Stoplight API to import the new specification, passing
            in the URL to the swagger file on Github.
        3. After the import succeeds, and your API in Stoplight is up to date, the script sends a request to the
            Stoplight API (this endpoint) to re-publish your documentation.

        Args:
            version_id: This is the unique identifier for the version.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``VersionsPublishResponse`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``Any | RawError``."""
        return unwrap(
            self.with_raw_response.post_versions_version_id_publish(version_id, request_options=request_options)
        )

    def put_versions_version_id_import(
        self,
        version_id: str,
        *,
        body: VersionsImportRequest | VersionsImportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VersionsImportResponse:
        """Import the given specification into an existing version.

        **Warning, this is a destructive action! Any resources present in both the existing version, and the
        specification being imported, will be overwritten.**

        This endpoint is particularly useful when you manage a specification file (Swagger or RAML) outside of
        Stoplight, and want to keep your Stoplight API version up to date as that specification changes.

        By default, a "merge" is performed when importing. If a resource exists in the specification that you are
        importing, and in the Stoplight API, the resource will be overwritten. If a resource exists in the Stoplight
        API, but not in the spefication that you are importing, the resource will be left alone (and not deleted).

        You can include an optional ``options`` property in the request body, to indicate if you would like to perform
        more of a replacement (instead of a merge). The options are documented in full in the response definition below
        these notes.

        Take this request + request body for example:

        ``PUT https://api.stoplight.io/v1/versions/123/import`` ```json
        {
        "url": "http://petstore.swagger.io/v2/swagger.json", "options": { "removeExtraEndpoints": true,
        "removeExtraSchemas": true
        }
        }
        ```

        This request will grab the swagger specification described at ``http://petstore.swagger.io/v2/swagger.json``,
        and import it into the Stoplight API version with id ``123``. Additionally, it will delete any existing
        endpoints or models that are not described in the petstore swagger being imported.

        Instead of a URL, you can provide the actual specification to be imported, either as a string (in the case of
        YAML) or an object (in the case of JSON). That request would look something like this:

        ``PUT https://api.stoplight.io/v1/versions/123/import`` ```json
        {
        "specData": { "swagger": "2.0", "info": {}
        ... rest of spec
        }
        }
        ```

        Args:
            version_id: This is the unique identifier for the version.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``VersionsImportResponse`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``Any | RawError``."""
        return unwrap(
            self.with_raw_response.put_versions_version_id_import(
                version_id, body=body, request_options=request_options
            ),
        )

    def put_versions_version_id_unpublish(
        self, version_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> VersionsUnpublishResponse:
        """Unpublish the documentation associated with the given API version.

        Args:
            version_id: This is the unique identifier for the version.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``VersionsUnpublishResponse`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``Any | RawError``."""
        return unwrap(
            self.with_raw_response.put_versions_version_id_unpublish(version_id, request_options=request_options)
        )

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


class ApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_versions_version_id_export_format(
        self,
        *,
        version_id: str = "",
        format_: FormatOrStr = Format.OAS_JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetVersionsVersionIdExportFormatErrorBody]:
        """Export a version to your choice of API specification.

        ### Allowed Formats:

        - oas.json
        - oas.yaml
        - raml08.yaml
        - raml10.yaml
        - stoplight.json
        - stoplight.yaml

        The stoplight format actually returns OAS (Swagger 2) with x-stoplight annotations. If you are exporting with
        the intent on importing back into Stoplight, this export format preserves the most information.

        ### Example URL:

        ``https://api.stoplight.io/v1/versions/123/export/oas.json``

        Args:
            version_id: This is the unique identifier for the version.
            format_: The specification / format that you want to export.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/versions/{versionId}/export/{format}"),
            path_params=[param[str]("versionId", version_id), param[FormatOrStr]("format", format_)],
            decoder=json_decoder[Any],
            error_mapper=get_versions_version_id_export_format_error_mapper,
            request_options=request_options,
        )

    def post_versions_publish_anon(
        self,
        *,
        body: VersionsPublishAnonRequest | VersionsPublishAnonRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VersionsPublishAnonResponse, PostVersionsPublishAnonErrorBody]:
        """Anonymously publish to API Docs.

        This endpoint will take a JSON spec or a URL to a swagger or raml spec.

        ```
        {
        "specData": {...}
        }
        ```

        or

        ```
        {
        "url": "http://petstore.swagger.io/v2/swagger.json"
        }
        ```

        The spec will be published to api-docs.io anonymously, which means you will not be able to update or remove this
        documentation.

        The response will contain a url to the published documentation.

        ```
        {
        "url": "https://swagger-petstore.api-docs.io/v1.0.0"
        }
        ```

        The limitations of anonymous publishing
        * Cannot update/remove the documentation
        * Cannot choose the subdomain
        * Cannot choose the version
        * Cannot add theming

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/versions/publish/anon"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VersionsPublishAnonRequest | VersionsPublishAnonRequestDict | None](body),
            decoder=json_decoder[VersionsPublishAnonResponse],
            error_mapper=post_versions_publish_anon_error_mapper,
            request_options=request_options,
        )

    def post_versions_version_id_publish(
        self, version_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[VersionsPublishResponse, PostVersionsVersionIdPublishErrorBody]:
        """Re-publish an API version in Stoplight. This will re-publish the given API version, with whatever publish
        settings have already been setup in the app.

        This will only work with APIs that have previously been published at least once.

        This works well with the #endpoint:957qEfc97BB5XGAeZ endpoint to augment your continuous integration processes,
        and automatically re-publish your documentation when certain events happen. Once such scenario is:

        1. Swagger is generated from your codebase, and pushed up to Github.
        2. A simple script that you write sends a request to the Stoplight API to import the new specification, passing
            in the URL to the swagger file on Github.
        3. After the import succeeds, and your API in Stoplight is up to date, the script sends a request to the
            Stoplight API (this endpoint) to re-publish your documentation.

        Args:
            version_id: This is the unique identifier for the version.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/versions/{versionId}/publish"),
            path_params=[param[str]("versionId", version_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.authorization,
            decoder=json_decoder[VersionsPublishResponse],
            error_mapper=post_versions_version_id_publish_error_mapper,
            request_options=request_options,
        )

    def put_versions_version_id_import(
        self,
        version_id: str,
        *,
        body: VersionsImportRequest | VersionsImportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VersionsImportResponse, PutVersionsVersionIdImportErrorBody]:
        """Import the given specification into an existing version.

        **Warning, this is a destructive action! Any resources present in both the existing version, and the
        specification being imported, will be overwritten.**

        This endpoint is particularly useful when you manage a specification file (Swagger or RAML) outside of
        Stoplight, and want to keep your Stoplight API version up to date as that specification changes.

        By default, a "merge" is performed when importing. If a resource exists in the specification that you are
        importing, and in the Stoplight API, the resource will be overwritten. If a resource exists in the Stoplight
        API, but not in the spefication that you are importing, the resource will be left alone (and not deleted).

        You can include an optional ``options`` property in the request body, to indicate if you would like to perform
        more of a replacement (instead of a merge). The options are documented in full in the response definition below
        these notes.

        Take this request + request body for example:

        ``PUT https://api.stoplight.io/v1/versions/123/import`` ```json
        {
        "url": "http://petstore.swagger.io/v2/swagger.json", "options": { "removeExtraEndpoints": true,
        "removeExtraSchemas": true
        }
        }
        ```

        This request will grab the swagger specification described at ``http://petstore.swagger.io/v2/swagger.json``,
        and import it into the Stoplight API version with id ``123``. Additionally, it will delete any existing
        endpoints or models that are not described in the petstore swagger being imported.

        Instead of a URL, you can provide the actual specification to be imported, either as a string (in the case of
        YAML) or an object (in the case of JSON). That request would look something like this:

        ``PUT https://api.stoplight.io/v1/versions/123/import`` ```json
        {
        "specData": { "swagger": "2.0", "info": {}
        ... rest of spec
        }
        }
        ```

        Args:
            version_id: This is the unique identifier for the version.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/versions/{versionId}/import"),
            path_params=[param[str]("versionId", version_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VersionsImportRequest | VersionsImportRequestDict | None](body),
            auth_scheme=self._auth.authorization,
            decoder=json_decoder[VersionsImportResponse],
            error_mapper=put_versions_version_id_import_error_mapper,
            request_options=request_options,
        )

    def put_versions_version_id_unpublish(
        self, version_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[VersionsUnpublishResponse, PutVersionsVersionIdUnpublishErrorBody]:
        """Unpublish the documentation associated with the given API version.

        Args:
            version_id: This is the unique identifier for the version.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/versions/{versionId}/unpublish"),
            path_params=[param[str]("versionId", version_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.authorization,
            decoder=json_decoder[VersionsUnpublishResponse],
            error_mapper=put_versions_version_id_unpublish_error_mapper,
            request_options=request_options,
        )


Client = StoplightClient
