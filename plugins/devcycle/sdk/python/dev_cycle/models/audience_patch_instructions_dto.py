from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .audience_patch_action import AudiencePatchAction, AudiencePatchActionDict
from .enums.op import OpOrStr


class AudiencePatchInstructionsDto(SdkBaseModel):
    op: OpOrStr
    action: AudiencePatchAction


class AudiencePatchInstructionsDtoDict(TypedDict):
    op: OpOrStr
    action: AudiencePatchActionDict
