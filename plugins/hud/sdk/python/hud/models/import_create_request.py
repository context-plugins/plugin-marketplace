from __future__ import annotations

from typing import Literal
from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ImportCreateRequest(SdkBaseModel):
    format: Literal["harbor"] = "harbor"
    file_id: UUID
    """A ready data file holding the bundle"""

    taskset_id: UUID
    """The taskset the bundle is imported into; the caller must be able to edit it"""


class ImportCreateRequestDict(TypedDict):
    format: Literal["harbor"]
    file_id: UUID
    taskset_id: UUID
