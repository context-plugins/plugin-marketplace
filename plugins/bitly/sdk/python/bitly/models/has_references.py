from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HasReferences(SdkBaseModel):
    references: Optional[dict[str, str]] = UNSET


class HasReferencesDict(TypedDict):
    references: NotRequired[dict[str, str]]
