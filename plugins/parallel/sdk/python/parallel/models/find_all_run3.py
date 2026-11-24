from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.generator1 import Generator1OrStr
from .find_all_run_status2 import FindAllRunStatus2, FindAllRunStatus2Dict
from .unions.metadata1 import Metadata1, Metadata1Dict


class FindAllRun3(SdkBaseModel):
    """Updated FindAll run information."""

    findall_id: str
    """ID of the FindAll run."""

    status: FindAllRunStatus2
    """Status object for the FindAll run."""

    generator: Generator1OrStr
    """Generator for the FindAll run."""

    metadata: Optional[dict[str, Metadata1]] = UNSET
    """Metadata for the FindAll run."""

    created_at: Optional[str] = UNSET
    """Timestamp of the creation of the run, in RFC 3339 format."""

    modified_at: Optional[str] = UNSET
    """Timestamp of the latest modification to the FindAll run result, in RFC 3339 format."""


class FindAllRun3Dict(TypedDict):
    findall_id: str
    status: FindAllRunStatus2Dict
    generator: Generator1OrStr
    metadata: NotRequired[dict[str, Metadata1Dict]]
    created_at: NotRequired[str]
    modified_at: NotRequired[str]
