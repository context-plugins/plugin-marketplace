from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OracleScnPosition2(SdkBaseModel):
    """Oracle SCN to start replicating from."""

    scn: Optional[str] = UNSET
    """Required. SCN number from where Logs will be read"""


class OracleScnPosition2Dict(TypedDict):
    scn: NotRequired[str]
