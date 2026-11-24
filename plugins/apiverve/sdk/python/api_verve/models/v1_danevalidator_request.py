from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1DanevalidatorRequest(SdkBaseModel):
    record: str
    """The DANE/TLSA record string to validate"""


class V1DanevalidatorRequestDict(TypedDict):
    record: str
