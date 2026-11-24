from __future__ import annotations

from typing import Literal
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status1 import Status1OrStr
from .import_file1 import ImportFile1, ImportFile1Dict


class ImportResponse(SdkBaseModel):
    id: UUID
    format: Literal["harbor"] = "harbor"
    taskset_id: UUID
    file: ImportFile1
    """The bundle, as it was when the import started"""

    status: Status1OrStr
    """``stopped``: the importer refused the bundle or stopped partway, and its report says why; ``failed``: the import
    did not run to an outcome"""

    summary: Optional[str] = UNSET
    """The importer's account of the outcome; set once completed or stopped"""

    metrics: Optional[dict[str, float]] = UNSET
    """Named counts the importer reports, e.g. ``tasks_imported``; set with ``summary``"""

    error: Optional[str] = UNSET
    """Why a failed import failed"""

    created_at: RFC3339DateTime
    completed_at: Optional[RFC3339DateTime] = UNSET
    """Null while the import is live"""


class ImportResponseDict(TypedDict):
    id: UUID
    format: Literal["harbor"]
    taskset_id: UUID
    file: ImportFile1Dict
    status: Status1OrStr
    summary: NotRequired[str]
    metrics: NotRequired[dict[str, float]]
    error: NotRequired[str]
    created_at: RFC3339DateTime
    completed_at: NotRequired[RFC3339DateTime]
