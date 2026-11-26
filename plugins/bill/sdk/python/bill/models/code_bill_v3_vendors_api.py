from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CodeBillV3VendorsApi(SdkBaseModel):
    name: Optional[str] = UNSET
    """Name"""

    value: Optional[str] = UNSET
    """Value"""


class CodeBillV3VendorsApiDict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[str]
