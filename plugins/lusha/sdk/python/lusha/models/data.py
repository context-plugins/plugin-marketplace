from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.run_scope import RunScopeOrStr


class Data(SdkBaseModel):
    column_id: Optional[str] = Field(default=UNSET, alias="columnId")
    run_scope: Optional[RunScopeOrStr] = Field(default=UNSET, alias="runScope")
    """Controls which rows a column operation applies to. ``all`` re-runs every row, including already-processed ones.
    ``missing`` only runs rows that don't have a value for this column yet. ``specific`` requires ``entityIds``."""

    status: Optional[str] = UNSET


class DataDict(TypedDict):
    column_id: NotRequired[str]
    run_scope: NotRequired[RunScopeOrStr]
    status: NotRequired[str]
