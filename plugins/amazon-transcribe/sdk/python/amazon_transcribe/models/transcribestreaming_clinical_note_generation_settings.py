from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.note_template import NoteTemplateOrStr


class TranscribestreamingClinicalNoteGenerationSettings(SdkBaseModel):
    output_bucket_name: str = Field(alias="OutputBucketName")
    """The name of the Amazon S3 bucket where you want the output of Amazon Web Services HealthScribe post-stream
    analytics stored. Don't include the S3:// prefix of the specified bucket. HealthScribe outputs transcript and
    clinical note files under the prefix:
    S3://$output-bucket-name/healthscribe-streaming/session-id/post-stream-analytics/clinical-notes The role
    ResourceAccessRoleArn specified in the MedicalScribeConfigurationEvent must have permission to use the specified
    location. You can change Amazon S3 permissions using the Amazon Web Services Management Console . See also
    Permissions Required"""

    note_template: Optional[NoteTemplateOrStr] = Field(default=UNSET, alias="NoteTemplate")
    """Specify one of the following templates to use for the clinical note summary. The default is HISTORY_AND_PHYSICAL.
    HISTORY_AND_PHYSICAL: Provides summaries for key sections of the clinical documentation. Examples of sections
    include Chief Complaint, History of Present Illness, Review of Systems, Past Medical History, Assessment, and Plan.
    GIRPP: Provides summaries based on the patients progress toward goals. Examples of sections include Goal,
    Intervention, Response, Progress, and Plan. BIRP: Focuses on the patient's behavioral patterns and responses.
    Examples of sections include Behavior, Inter"""


class TranscribestreamingClinicalNoteGenerationSettingsDict(TypedDict):
    output_bucket_name: str
    note_template: NotRequired[NoteTemplateOrStr]
