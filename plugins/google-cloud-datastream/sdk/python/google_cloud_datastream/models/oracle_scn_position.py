from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OracleScnPosition(SdkBaseModel):
    """Oracle SCN position"""

    scn: Optional[str] = UNSET
    """Required. SCN number from where Logs will be read"""


class OracleScnPositionDict(TypedDict):
    scn: NotRequired[str]
