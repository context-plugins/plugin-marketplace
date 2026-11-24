from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.organization_resource_collection_type import OrganizationResourceCollectionTypeOrStr


class OrganizationHealthResourceCollectionRequest(SdkBaseModel):
    organization_resource_collection_type: OrganizationResourceCollectionTypeOrStr = Field(
        alias="OrganizationResourceCollectionType"
    )
    """An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources
    are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services
    CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru
    can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged
    using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks."""

    account_ids: Optional[list[str]] = Field(default=UNSET, alias="AccountIds")
    """The ID of the Amazon Web Services account."""

    organizational_unit_ids: Optional[list[str]] = Field(default=UNSET, alias="OrganizationalUnitIds")
    """The ID of the organizational unit."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If this value is null, it
    retrieves the first page."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to return with a single call. To retrieve the remaining results, make another call
    with the returned nextToken value."""


class OrganizationHealthResourceCollectionRequestDict(TypedDict):
    organization_resource_collection_type: OrganizationResourceCollectionTypeOrStr
    account_ids: NotRequired[list[str]]
    organizational_unit_ids: NotRequired[list[str]]
    next_token: NotRequired[str]
    max_results: NotRequired[int]
