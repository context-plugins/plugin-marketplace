from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1SearchResourcesRequest(SdkBaseModel):
    """The SearchResources method's request."""

    page_size: Optional[int] = Field(default=UNSET, alias="pageSize")
    """Optional. The maximum number of search results to return. The service may return fewer than this value. If
    unspecified at most 10 search results will be returned. If value is negative then ``INVALID_ARGUMENT`` error is
    returned. The maximum value is 25; values above 25 will be coerced to 25. While paginating, you can specify a new
    page size parameter for each page of search results to be listed."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Optional. A page token, received from a previous SearchResources call. Specify this parameter to retrieve the
    next page of transactions. When paginating, you must specify the ``page_token`` parameter and all the other
    parameters except page_size should be specified with the same value which was used in the previous call. If the
    other fields are set with a different value than the previous call then ``INVALID_ARGUMENT`` error is returned."""

    filter: Optional[str] = UNSET
    """Optional. An expression that filters the list of search results. A filter expression consists of a field name, a
    comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison
    operator must be ``=``. Filters are not case sensitive. The following field names are eligible for filtering: *
    ``resource_type`` - The type of resource in the search results. Must be one of the following: ``Api``,
    ``ApiOperation``, ``Deployment``, ``Definition``, ``Spec`` or ``Version``. This field can only be specified once in
    the filter. Here are is an example: * ``resource_type = Api`` - The resource_type is _Api_."""

    query: Optional[str] = UNSET
    """Required. The free text search query. This query can contain keywords which could be related to any detail of the
    API-Hub resources such display names, descriptions, attributes etc."""


class GoogleCloudApihubV1SearchResourcesRequestDict(TypedDict):
    page_size: NotRequired[int]
    page_token: NotRequired[str]
    filter: NotRequired[str]
    query: NotRequired[str]
