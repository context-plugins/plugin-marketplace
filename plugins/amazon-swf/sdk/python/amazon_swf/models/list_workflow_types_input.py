from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.registration_status2 import RegistrationStatus2OrStr


class ListWorkflowTypesInput(SdkBaseModel):
    domain: str
    """The name of the domain in which the workflow types have been registered."""

    name: Optional[str] = UNSET
    """If specified, lists the workflow type with this name."""

    registration_status: RegistrationStatus2OrStr = Field(alias="registrationStatus")
    """Specifies the registration status of the workflow types to list."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """If NextPageToken is returned there are more results available. The value of NextPageToken is a unique pagination
    token for each page. Make the call again using the returned token to retrieve the next page. Keep all other
    arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a
    400 error: "Specified token has exceeded its maximum lifetime". The configured maximumPageSize determines how many
    results can be returned in a single call."""

    maximum_page_size: Optional[int] = Field(default=UNSET, alias="maximumPageSize")
    """The maximum number of results that are returned per call. Use nextPageToken to obtain further pages of
    results."""

    reverse_order: Optional[bool] = Field(default=UNSET, alias="reverseOrder")
    """When set to true, returns the results in reverse order. By default the results are returned in ascending
    alphabetical order of the name of the workflow types."""


class ListWorkflowTypesInputDict(TypedDict):
    domain: str
    name: NotRequired[str]
    registration_status: RegistrationStatus2OrStr
    next_page_token: NotRequired[str]
    maximum_page_size: NotRequired[int]
    reverse_order: NotRequired[bool]
