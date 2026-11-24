from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GroupPreferences(SdkBaseModel):
    group_guid: Optional[str] = UNSET
    domain_preference: Optional[str] = UNSET


class GroupPreferencesDict(TypedDict):
    group_guid: NotRequired[str]
    domain_preference: NotRequired[str]
