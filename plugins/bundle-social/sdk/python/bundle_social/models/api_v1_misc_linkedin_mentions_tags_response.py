from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .organization import Organization, OrganizationDict
from .person import Person, PersonDict


class ApiV1MiscLinkedinMentionsTagsResponse(SdkBaseModel):
    people: Optional[list[Person]] = UNSET
    organizations: Optional[list[Organization]] = UNSET


class ApiV1MiscLinkedinMentionsTagsResponseDict(TypedDict):
    people: NotRequired[list[PersonDict]]
    organizations: NotRequired[list[OrganizationDict]]
