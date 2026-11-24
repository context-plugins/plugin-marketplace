from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DataConflictErrorError(SdkBaseModel):
    """Error returned when Datomic tx fails due to Datomc :db.error/cas-failed error"""

    error: Literal["data-conflict-error"] = "data-conflict-error"
    message: str
    """An explanatory message: "The update failed due to a data conflict. Please refresh and try again."
    """


class DataConflictErrorErrorDict(TypedDict):
    error: Literal["data-conflict-error"]
    message: str
