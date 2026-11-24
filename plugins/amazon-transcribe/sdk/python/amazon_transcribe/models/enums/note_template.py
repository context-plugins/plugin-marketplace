from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NoteTemplate(str, Enum):
    """Specify one of the following templates to use for the clinical note summary. The default is HISTORY_AND_PHYSICAL.
    HISTORY_AND_PHYSICAL: Provides summaries for key sections of the clinical documentation. Examples of sections
    include Chief Complaint, History of Present Illness, Review of Systems, Past Medical History, Assessment, and Plan.
    GIRPP: Provides summaries based on the patients progress toward goals. Examples of sections include Goal,
    Intervention, Response, Progress, and Plan. BIRP: Focuses on the patient's behavioral patterns and responses.
    Examples of sections include Behavior, Inter"""

    HISTORY_AND_PHYSICAL = "HISTORY_AND_PHYSICAL"
    GIRPP = "GIRPP"
    BIRP = "BIRP"
    SIRP = "SIRP"
    DAP = "DAP"
    BEHAVIORAL_SOAP = "BEHAVIORAL_SOAP"
    PHYSICAL_SOAP = "PHYSICAL_SOAP"

    __str__ = str.__str__


NoteTemplateOrStr: TypeAlias = Annotated[NoteTemplate | str, open_enum_validator(NoteTemplate)]
