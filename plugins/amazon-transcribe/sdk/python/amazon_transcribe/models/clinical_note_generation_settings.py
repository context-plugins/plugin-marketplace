from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.note_template import NoteTemplateOrStr


class ClinicalNoteGenerationSettings(SdkBaseModel):
    note_template: Optional[NoteTemplateOrStr] = Field(default=UNSET, alias="NoteTemplate")
    """Specify one of the following templates to use for the clinical note summary. The default is HISTORY_AND_PHYSICAL.
    HISTORY_AND_PHYSICAL: Provides summaries for key sections of the clinical documentation. Examples of sections
    include Chief Complaint, History of Present Illness, Review of Systems, Past Medical History, Assessment, and Plan.
    GIRPP: Provides summaries based on the patients progress toward goals. Examples of sections include Goal,
    Intervention, Response, Progress, and Plan. BIRP: Focuses on the patient's behavioral patterns and responses.
    Examples of sections include Behavior, Inter"""


class ClinicalNoteGenerationSettingsDict(TypedDict):
    note_template: NotRequired[NoteTemplateOrStr]
