from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_activities_signatures_by_business_error import (
    GetActivitiesSignaturesByBusinessErrorBody,
    get_activities_signatures_by_business_error_mapper,
)
from ..models.activities_signatures_by_business_response import ActivitiesSignaturesByBusinessResponse
from ..models.enums.sort import Sort, SortOrStr
from ..server.server import Server


class Report:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ReportWithRawResponse(client, server, auth)

    def get_activities_signatures_by_business(
        self,
        start_date: Date,
        end_date: Date,
        *,
        page: float | None = 1.0,
        size: float | None = 25.0,
        sort: SortOrStr | None = Sort.DESC,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ActivitiesSignaturesByBusinessResponse:
        """Returns detailed signature ``activities`` for your business and its members within a specified date range.

        Use these parameters to filter for a specific time range.

        | **Parameter** | **Description** | **Mandatory** |
        | --- | --- | --- |
        | ``start_date`` | The start date of the range to fetch the signature ``activities``. Format: ``yyyy-MM-dd.`` |
            yes |
        | ``end_date`` | The end date of the range to fetch the signature ``activities``. Format: ``yyyy-MM-dd.`` | yes
            |

        ### **Pagination**

        The result set can be controlled using the optional pagination parameters ``page`` and ``size``

        | **Parameter** | **Description** | **Mandatory** |
        | --- | --- | --- |
        | ``page`` | The page number to fetch the signature ``activities``. Must be a positive integer. Default: 1 | no
            |
        | ``size`` | The size of the page to fetch the signature activities. Must be a positive integer. Default: 25
            Maximum: 100 | no |
        | ``sort`` | The sort order of the signature activities. Can be ``asc`` or ``desc``. Default is ``desc``. | no |

        ### **Response**

        The response contains the following information.

        **General**

        | **Field** | **Description** |
        | --- | --- |
        | ``activities`` | Array of ``activities``. See the following subchapter _Activities_. |
        | ``total_items`` | Total items to fetch when paginating through all the pages. |
        | ``total_pages`` | Total pages to fetch when paginating through all the pages. |
        | ``current_page`` | Current page number. |
        | ``size`` | Size of the page. |

        **Activities**

        | **Field** | **Description** |
        | --- | --- |
        | ``id`` | The ID of the signature ``activity``. |
        | ``action`` | The action type of a signature activity. Can be ``signed`` or ``sealed``. |
        | ``timestamp`` | The timestamp of the signature activity. |
        | ``signature_request_id`` | The signature request ID. |
        | ``cost_center`` | The cost center of the signature paying party. This information might not necessarily be
            present. |
        | ``initiator`` | The initiator ``user`` of the signature ``activity``. See the following subchapter _User_. |
        | ``signer`` | The signer ``user`` of the signature ``activity``. See the following subchapter _User_. |

        **User**

        | **Field** | **Description** |
        | --- | --- |
        | ``email`` | The email of the ``user``. |
        | ``first_name`` | The first name of the ``user``. |
        | ``last_name`` | The last name of the ``user``. |
        | ``type`` | The membership status of the ``user`` in relation to the business. Can be ``api``, ``external``,
            ``member`` or ``unknown``. |
        | ``mobile`` | The mobile number of the user. |

        Args:
            start_date: Start Date to find
            end_date: End Date to find
            page: Page for pagination.
            size: Page size for pagination.
            sort: Sort order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            self._with_raw_response.get_activities_signatures_by_business(
                start_date, end_date, page=page, size=size, sort=sort, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ReportWithRawResponse:
        return self._with_raw_response


class AsyncReport:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncReportWithRawResponse(client, server, auth)

    async def get_activities_signatures_by_business(
        self,
        start_date: Date,
        end_date: Date,
        *,
        page: float | None = 1.0,
        size: float | None = 25.0,
        sort: SortOrStr | None = Sort.DESC,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ActivitiesSignaturesByBusinessResponse:
        """Returns detailed signature ``activities`` for your business and its members within a specified date range.

        Use these parameters to filter for a specific time range.

        | **Parameter** | **Description** | **Mandatory** |
        | --- | --- | --- |
        | ``start_date`` | The start date of the range to fetch the signature ``activities``. Format: ``yyyy-MM-dd.`` |
            yes |
        | ``end_date`` | The end date of the range to fetch the signature ``activities``. Format: ``yyyy-MM-dd.`` | yes
            |

        ### **Pagination**

        The result set can be controlled using the optional pagination parameters ``page`` and ``size``

        | **Parameter** | **Description** | **Mandatory** |
        | --- | --- | --- |
        | ``page`` | The page number to fetch the signature ``activities``. Must be a positive integer. Default: 1 | no
            |
        | ``size`` | The size of the page to fetch the signature activities. Must be a positive integer. Default: 25
            Maximum: 100 | no |
        | ``sort`` | The sort order of the signature activities. Can be ``asc`` or ``desc``. Default is ``desc``. | no |

        ### **Response**

        The response contains the following information.

        **General**

        | **Field** | **Description** |
        | --- | --- |
        | ``activities`` | Array of ``activities``. See the following subchapter _Activities_. |
        | ``total_items`` | Total items to fetch when paginating through all the pages. |
        | ``total_pages`` | Total pages to fetch when paginating through all the pages. |
        | ``current_page`` | Current page number. |
        | ``size`` | Size of the page. |

        **Activities**

        | **Field** | **Description** |
        | --- | --- |
        | ``id`` | The ID of the signature ``activity``. |
        | ``action`` | The action type of a signature activity. Can be ``signed`` or ``sealed``. |
        | ``timestamp`` | The timestamp of the signature activity. |
        | ``signature_request_id`` | The signature request ID. |
        | ``cost_center`` | The cost center of the signature paying party. This information might not necessarily be
            present. |
        | ``initiator`` | The initiator ``user`` of the signature ``activity``. See the following subchapter _User_. |
        | ``signer`` | The signer ``user`` of the signature ``activity``. See the following subchapter _User_. |

        **User**

        | **Field** | **Description** |
        | --- | --- |
        | ``email`` | The email of the ``user``. |
        | ``first_name`` | The first name of the ``user``. |
        | ``last_name`` | The last name of the ``user``. |
        | ``type`` | The membership status of the ``user`` in relation to the business. Can be ``api``, ``external``,
            ``member`` or ``unknown``. |
        | ``mobile`` | The mobile number of the user. |

        Args:
            start_date: Start Date to find
            end_date: End Date to find
            page: Page for pagination.
            size: Page size for pagination.
            sort: Sort order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.get_activities_signatures_by_business(
                start_date, end_date, page=page, size=size, sort=sort, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncReportWithRawResponse:
        return self._with_raw_response


class ReportWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_activities_signatures_by_business(
        self,
        start_date: Date,
        end_date: Date,
        *,
        page: float | None = 1.0,
        size: float | None = 25.0,
        sort: SortOrStr | None = Sort.DESC,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ActivitiesSignaturesByBusinessResponse, GetActivitiesSignaturesByBusinessErrorBody]:
        """Returns detailed signature ``activities`` for your business and its members within a specified date range.

        Use these parameters to filter for a specific time range.

        | **Parameter** | **Description** | **Mandatory** |
        | --- | --- | --- |
        | ``start_date`` | The start date of the range to fetch the signature ``activities``. Format: ``yyyy-MM-dd.`` |
            yes |
        | ``end_date`` | The end date of the range to fetch the signature ``activities``. Format: ``yyyy-MM-dd.`` | yes
            |

        ### **Pagination**

        The result set can be controlled using the optional pagination parameters ``page`` and ``size``

        | **Parameter** | **Description** | **Mandatory** |
        | --- | --- | --- |
        | ``page`` | The page number to fetch the signature ``activities``. Must be a positive integer. Default: 1 | no
            |
        | ``size`` | The size of the page to fetch the signature activities. Must be a positive integer. Default: 25
            Maximum: 100 | no |
        | ``sort`` | The sort order of the signature activities. Can be ``asc`` or ``desc``. Default is ``desc``. | no |

        ### **Response**

        The response contains the following information.

        **General**

        | **Field** | **Description** |
        | --- | --- |
        | ``activities`` | Array of ``activities``. See the following subchapter _Activities_. |
        | ``total_items`` | Total items to fetch when paginating through all the pages. |
        | ``total_pages`` | Total pages to fetch when paginating through all the pages. |
        | ``current_page`` | Current page number. |
        | ``size`` | Size of the page. |

        **Activities**

        | **Field** | **Description** |
        | --- | --- |
        | ``id`` | The ID of the signature ``activity``. |
        | ``action`` | The action type of a signature activity. Can be ``signed`` or ``sealed``. |
        | ``timestamp`` | The timestamp of the signature activity. |
        | ``signature_request_id`` | The signature request ID. |
        | ``cost_center`` | The cost center of the signature paying party. This information might not necessarily be
            present. |
        | ``initiator`` | The initiator ``user`` of the signature ``activity``. See the following subchapter _User_. |
        | ``signer`` | The signer ``user`` of the signature ``activity``. See the following subchapter _User_. |

        **User**

        | **Field** | **Description** |
        | --- | --- |
        | ``email`` | The email of the ``user``. |
        | ``first_name`` | The first name of the ``user``. |
        | ``last_name`` | The last name of the ``user``. |
        | ``type`` | The membership status of the ``user`` in relation to the business. Can be ``api``, ``external``,
            ``member`` or ``unknown``. |
        | ``mobile`` | The mobile number of the user. |

        Args:
            start_date: Start Date to find
            end_date: End Date to find
            page: Page for pagination.
            size: Page size for pagination.
            sort: Sort order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_report_api("/activities/signatures"),
            query_params=[
                param[Date]("start_date", start_date),
                param[Date]("end_date", end_date),
                param[float | None]("page", page),
                param[float | None]("size", size),
                param[SortOrStr | None]("sort", sort),
            ],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[ActivitiesSignaturesByBusinessResponse],
            error_mapper=get_activities_signatures_by_business_error_mapper,
            request_options=request_options,
        )


class AsyncReportWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_activities_signatures_by_business(
        self,
        start_date: Date,
        end_date: Date,
        *,
        page: float | None = 1.0,
        size: float | None = 25.0,
        sort: SortOrStr | None = Sort.DESC,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ActivitiesSignaturesByBusinessResponse, GetActivitiesSignaturesByBusinessErrorBody]:
        """Returns detailed signature ``activities`` for your business and its members within a specified date range.

        Use these parameters to filter for a specific time range.

        | **Parameter** | **Description** | **Mandatory** |
        | --- | --- | --- |
        | ``start_date`` | The start date of the range to fetch the signature ``activities``. Format: ``yyyy-MM-dd.`` |
            yes |
        | ``end_date`` | The end date of the range to fetch the signature ``activities``. Format: ``yyyy-MM-dd.`` | yes
            |

        ### **Pagination**

        The result set can be controlled using the optional pagination parameters ``page`` and ``size``

        | **Parameter** | **Description** | **Mandatory** |
        | --- | --- | --- |
        | ``page`` | The page number to fetch the signature ``activities``. Must be a positive integer. Default: 1 | no
            |
        | ``size`` | The size of the page to fetch the signature activities. Must be a positive integer. Default: 25
            Maximum: 100 | no |
        | ``sort`` | The sort order of the signature activities. Can be ``asc`` or ``desc``. Default is ``desc``. | no |

        ### **Response**

        The response contains the following information.

        **General**

        | **Field** | **Description** |
        | --- | --- |
        | ``activities`` | Array of ``activities``. See the following subchapter _Activities_. |
        | ``total_items`` | Total items to fetch when paginating through all the pages. |
        | ``total_pages`` | Total pages to fetch when paginating through all the pages. |
        | ``current_page`` | Current page number. |
        | ``size`` | Size of the page. |

        **Activities**

        | **Field** | **Description** |
        | --- | --- |
        | ``id`` | The ID of the signature ``activity``. |
        | ``action`` | The action type of a signature activity. Can be ``signed`` or ``sealed``. |
        | ``timestamp`` | The timestamp of the signature activity. |
        | ``signature_request_id`` | The signature request ID. |
        | ``cost_center`` | The cost center of the signature paying party. This information might not necessarily be
            present. |
        | ``initiator`` | The initiator ``user`` of the signature ``activity``. See the following subchapter _User_. |
        | ``signer`` | The signer ``user`` of the signature ``activity``. See the following subchapter _User_. |

        **User**

        | **Field** | **Description** |
        | --- | --- |
        | ``email`` | The email of the ``user``. |
        | ``first_name`` | The first name of the ``user``. |
        | ``last_name`` | The last name of the ``user``. |
        | ``type`` | The membership status of the ``user`` in relation to the business. Can be ``api``, ``external``,
            ``member`` or ``unknown``. |
        | ``mobile`` | The mobile number of the user. |

        Args:
            start_date: Start Date to find
            end_date: End Date to find
            page: Page for pagination.
            size: Page size for pagination.
            sort: Sort order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_report_api("/activities/signatures"),
            query_params=[
                param[Date]("start_date", start_date),
                param[Date]("end_date", end_date),
                param[float | None]("page", page),
                param[float | None]("size", size),
                param[SortOrStr | None]("sort", sort),
            ],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[ActivitiesSignaturesByBusinessResponse],
            error_mapper=get_activities_signatures_by_business_error_mapper,
            request_options=request_options,
        )
