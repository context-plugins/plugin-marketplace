from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.registration_status1 import RegistrationStatus1OrStr


class ListDomainsInput(SdkBaseModel):
    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """If NextPageToken is returned there are more results available. The value of NextPageToken is a unique pagination
    token for each page. Make the call again using the returned token to retrieve the next page. Keep all other
    arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a
    400 error: "Specified token has exceeded its maximum lifetime". The configured maximumPageSize determines how many
    results can be returned in a single call."""

    registration_status: RegistrationStatus1OrStr = Field(alias="registrationStatus")
    """Specifies the registration status of the domains to list."""

    maximum_page_size: Optional[int] = Field(default=UNSET, alias="maximumPageSize")
    """The maximum number of results that are returned per call. Use nextPageToken to obtain further pages of
    results."""

    reverse_order: Optional[bool] = Field(default=UNSET, alias="reverseOrder")
    """When set to true, returns the results in reverse order. By default, the results are returned in ascending
    alphabetical order by name of the domains."""


class ListDomainsInputDict(TypedDict):
    next_page_token: NotRequired[str]
    registration_status: RegistrationStatus1OrStr
    maximum_page_size: NotRequired[int]
    reverse_order: NotRequired[bool]
