from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class CompanyLushaSignalsApi(SdkBaseModel):
    name: str
    domain: str
    is_current: bool = True


class CompanyLushaSignalsApiDict(TypedDict):
    name: str
    domain: str
    is_current: NotRequired[bool]
