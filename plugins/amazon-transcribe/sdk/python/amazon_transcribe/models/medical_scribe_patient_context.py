from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pronouns import PronounsOrStr


class MedicalScribePatientContext(SdkBaseModel):
    pronouns: Optional[PronounsOrStr] = Field(default=UNSET, alias="Pronouns")
    """The patient's preferred pronouns that the user wants to provide as a context for clinical note generation."""


class MedicalScribePatientContextDict(TypedDict):
    pronouns: NotRequired[PronounsOrStr]
