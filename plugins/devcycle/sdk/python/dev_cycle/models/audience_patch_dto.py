from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .audience_patch_instructions_dto import AudiencePatchInstructionsDto, AudiencePatchInstructionsDtoDict


class AudiencePatchDto(SdkBaseModel):
    instructions: list[AudiencePatchInstructionsDto]


class AudiencePatchDtoDict(TypedDict):
    instructions: list[AudiencePatchInstructionsDtoDict]
