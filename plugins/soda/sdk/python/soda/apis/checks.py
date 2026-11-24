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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_decoder,
    param,
    unwrap,
)
from ..errors.delete_api_v1_checks_check_id_error import (
    DeleteApiV1ChecksCheckIdErrorBody,
    delete_api_v1_checks_check_id_error_mapper,
)
from ..errors.get_api_v1_checks_error import GetApiV1ChecksErrorBody, get_api_v1_checks_error_mapper
from ..models.public_api_checks_response import PublicApiChecksResponse
from ..server.server import Server


class Checks:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ChecksWithRawResponse(client, server, auth)

    def delete_api_v1_checks_check_id(
        self, check_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """This endpoint allows you to delete a specific check in your organization's Soda Cloud account.

        ## Authorization

        Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can
        delete checks. Soda Cloud Admins can delete checks for all datasets. **See Manage dataset roles for more
        information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Checks``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            check_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_api_v1_checks_check_id(check_id, request_options=request_options))

    def get_api_v1_checks(
        self,
        *,
        check_ids: str | None = None,
        data_standard_id: str | None = None,
        dataset_id: str | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiChecksResponse:
        """This endpoint enables you to gather information about the checks that in exist in your organization's Soda
        Cloud account, including information about the datasets and agreements with which they are associated and the
        incidents to which they are linked. .

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``datasetId``: Optionally, use this parameter to collect only the information for checks associated with a
            specific dataset. Find the ``datasetId`` in the URL of the dataset page in Soda Cloud.

        - ``dataStandardId``: Optionally, use this parameter to collect only the information for checks belonging to a
            specific data standard. Find the ``dataStandardId`` in the URL of the data standard page in Soda Cloud.

        - ``checkIds``: Optionally, use this parameter to collect only the information for a specific batch of checks.
            Provide multiple values as a comma-separated list of check IDs, which you can find on the individual check
            pages in Soda Cloud. This query parameter is limited to 1000 check IDs and it can't be combined with other
            query parameters like ``page``, ``datasetId``, ``size``.

        If not specified, the query gathers information for all checks in the account and sorts the results by check
        name in ascending order.

        ## Authorization

        Soda only returns the checks linked to datasets to which the user has **View dataset** permissions. Soda Cloud
        Admins have access to all checks.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Checks``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            check_ids: Value sent with the request.
            data_standard_id: Value sent with the request.
            dataset_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_checks(
                check_ids=check_ids,
                data_standard_id=data_standard_id,
                dataset_id=dataset_id,
                page=page,
                size=size,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ChecksWithRawResponse:
        return self._with_raw_response


class AsyncChecks:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncChecksWithRawResponse(client, server, auth)

    async def delete_api_v1_checks_check_id(
        self, check_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """This endpoint allows you to delete a specific check in your organization's Soda Cloud account.

        ## Authorization

        Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can
        delete checks. Soda Cloud Admins can delete checks for all datasets. **See Manage dataset roles for more
        information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Checks``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            check_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_api_v1_checks_check_id(check_id, request_options=request_options)
        )

    async def get_api_v1_checks(
        self,
        *,
        check_ids: str | None = None,
        data_standard_id: str | None = None,
        dataset_id: str | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiChecksResponse:
        """This endpoint enables you to gather information about the checks that in exist in your organization's Soda
        Cloud account, including information about the datasets and agreements with which they are associated and the
        incidents to which they are linked. .

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``datasetId``: Optionally, use this parameter to collect only the information for checks associated with a
            specific dataset. Find the ``datasetId`` in the URL of the dataset page in Soda Cloud.

        - ``dataStandardId``: Optionally, use this parameter to collect only the information for checks belonging to a
            specific data standard. Find the ``dataStandardId`` in the URL of the data standard page in Soda Cloud.

        - ``checkIds``: Optionally, use this parameter to collect only the information for a specific batch of checks.
            Provide multiple values as a comma-separated list of check IDs, which you can find on the individual check
            pages in Soda Cloud. This query parameter is limited to 1000 check IDs and it can't be combined with other
            query parameters like ``page``, ``datasetId``, ``size``.

        If not specified, the query gathers information for all checks in the account and sorts the results by check
        name in ascending order.

        ## Authorization

        Soda only returns the checks linked to datasets to which the user has **View dataset** permissions. Soda Cloud
        Admins have access to all checks.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Checks``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            check_ids: Value sent with the request.
            data_standard_id: Value sent with the request.
            dataset_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_checks(
                check_ids=check_ids,
                data_standard_id=data_standard_id,
                dataset_id=dataset_id,
                page=page,
                size=size,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncChecksWithRawResponse:
        return self._with_raw_response


class ChecksWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_api_v1_checks_check_id(
        self, check_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteApiV1ChecksCheckIdErrorBody]:
        """This endpoint allows you to delete a specific check in your organization's Soda Cloud account.

        ## Authorization

        Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can
        delete checks. Soda Cloud Admins can delete checks for all datasets. **See Manage dataset roles for more
        information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Checks``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            check_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/checks/{checkId}"),
            path_params=[param[str]("checkId", check_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=empty_response,
            error_mapper=delete_api_v1_checks_check_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_checks(
        self,
        *,
        check_ids: str | None = None,
        data_standard_id: str | None = None,
        dataset_id: str | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiChecksResponse, GetApiV1ChecksErrorBody]:
        """This endpoint enables you to gather information about the checks that in exist in your organization's Soda
        Cloud account, including information about the datasets and agreements with which they are associated and the
        incidents to which they are linked. .

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``datasetId``: Optionally, use this parameter to collect only the information for checks associated with a
            specific dataset. Find the ``datasetId`` in the URL of the dataset page in Soda Cloud.

        - ``dataStandardId``: Optionally, use this parameter to collect only the information for checks belonging to a
            specific data standard. Find the ``dataStandardId`` in the URL of the data standard page in Soda Cloud.

        - ``checkIds``: Optionally, use this parameter to collect only the information for a specific batch of checks.
            Provide multiple values as a comma-separated list of check IDs, which you can find on the individual check
            pages in Soda Cloud. This query parameter is limited to 1000 check IDs and it can't be combined with other
            query parameters like ``page``, ``datasetId``, ``size``.

        If not specified, the query gathers information for all checks in the account and sorts the results by check
        name in ascending order.

        ## Authorization

        Soda only returns the checks linked to datasets to which the user has **View dataset** permissions. Soda Cloud
        Admins have access to all checks.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Checks``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            check_ids: Value sent with the request.
            data_standard_id: Value sent with the request.
            dataset_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/checks"),
            query_params=[
                param[str | None]("checkIds", check_ids),
                param[str | None]("dataStandardId", data_standard_id),
                param[str | None]("datasetId", dataset_id),
                param[int | None]("page", page),
                param[int | None]("size", size),
            ],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiChecksResponse],
            error_mapper=get_api_v1_checks_error_mapper,
            request_options=request_options,
        )


class AsyncChecksWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_api_v1_checks_check_id(
        self, check_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteApiV1ChecksCheckIdErrorBody]:
        """This endpoint allows you to delete a specific check in your organization's Soda Cloud account.

        ## Authorization

        Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can
        delete checks. Soda Cloud Admins can delete checks for all datasets. **See Manage dataset roles for more
        information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Checks``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            check_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/checks/{checkId}"),
            path_params=[param[str]("checkId", check_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_empty_response,
            error_mapper=delete_api_v1_checks_check_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_checks(
        self,
        *,
        check_ids: str | None = None,
        data_standard_id: str | None = None,
        dataset_id: str | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiChecksResponse, GetApiV1ChecksErrorBody]:
        """This endpoint enables you to gather information about the checks that in exist in your organization's Soda
        Cloud account, including information about the datasets and agreements with which they are associated and the
        incidents to which they are linked. .

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``datasetId``: Optionally, use this parameter to collect only the information for checks associated with a
            specific dataset. Find the ``datasetId`` in the URL of the dataset page in Soda Cloud.

        - ``dataStandardId``: Optionally, use this parameter to collect only the information for checks belonging to a
            specific data standard. Find the ``dataStandardId`` in the URL of the data standard page in Soda Cloud.

        - ``checkIds``: Optionally, use this parameter to collect only the information for a specific batch of checks.
            Provide multiple values as a comma-separated list of check IDs, which you can find on the individual check
            pages in Soda Cloud. This query parameter is limited to 1000 check IDs and it can't be combined with other
            query parameters like ``page``, ``datasetId``, ``size``.

        If not specified, the query gathers information for all checks in the account and sorts the results by check
        name in ascending order.

        ## Authorization

        Soda only returns the checks linked to datasets to which the user has **View dataset** permissions. Soda Cloud
        Admins have access to all checks.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Checks``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            check_ids: Value sent with the request.
            data_standard_id: Value sent with the request.
            dataset_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/checks"),
            query_params=[
                param[str | None]("checkIds", check_ids),
                param[str | None]("dataStandardId", data_standard_id),
                param[str | None]("datasetId", dataset_id),
                param[int | None]("page", page),
                param[int | None]("size", size),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiChecksResponse],
            error_mapper=get_api_v1_checks_error_mapper,
            request_options=request_options,
        )
