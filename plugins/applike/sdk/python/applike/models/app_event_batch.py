from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .app import App, AppDict
from .unions.app_event2 import AppEvent2, AppEvent2Dict
from .unions.user4 import User4, User4Dict


class AppEventBatch(SdkBaseModel):
    """A batch of AppEvents, all for one app user combination. If one event is invalid, the whole batch is rejected."""

    batch_id: UUID = Field(alias="batchId")
    """36 character uuid of the batch"""

    app: App
    user: User4
    events: list[AppEvent2]


class AppEventBatchDict(TypedDict):
    batch_id: UUID
    app: AppDict
    user: User4Dict
    events: list[AppEvent2Dict]
