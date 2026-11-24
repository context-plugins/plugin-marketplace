from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Issue(SdkBaseModel):
    severity: Optional[str] = UNSET
    code: Optional[str] = UNSET
    diagnostics: Optional[str] = UNSET


class IssueDict(TypedDict):
    severity: NotRequired[str]
    code: NotRequired[str]
    diagnostics: NotRequired[str]
