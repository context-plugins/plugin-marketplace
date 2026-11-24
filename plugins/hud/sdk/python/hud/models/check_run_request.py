from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .enums.check_subject_type import CheckSubjectTypeOrStr


class CheckRunRequest(SdkBaseModel):
    """Request to execute one check against one resource."""

    subject_type: CheckSubjectTypeOrStr
    """Platform resources supported by the check framework."""

    subject_id: UUID
    overwrite: bool = False


class CheckRunRequestDict(TypedDict):
    subject_type: CheckSubjectTypeOrStr
    subject_id: UUID
    overwrite: NotRequired[bool]
