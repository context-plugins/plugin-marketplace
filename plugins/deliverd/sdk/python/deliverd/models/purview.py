from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.restriction import RestrictionOrStr


class Purview(SdkBaseModel):
    """Microsoft Purview's answer on the text, from the SDKs' purviewCheck: the strictest restriction its DLP policies
    returned (block, warn, audit or none). The text itself went to Microsoft, never here"""

    restriction: RestrictionOrStr | None
    actions: int
    scope_modified: bool = Field(alias="scopeModified")
    unavailable: bool


class PurviewDict(TypedDict):
    restriction: RestrictionOrStr | None
    actions: int
    scope_modified: bool
    unavailable: bool
