from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .clinical_note_generation_settings import ClinicalNoteGenerationSettings, ClinicalNoteGenerationSettingsDict
from .enums.vocabulary_filter_method import VocabularyFilterMethodOrStr


class MedicalScribeSettings(SdkBaseModel):
    show_speaker_labels: Optional[bool] = Field(default=UNSET, alias="ShowSpeakerLabels")
    """Enables speaker partitioning (diarization) in your Medical Scribe output. Speaker partitioning labels the speech
    from individual speakers in your media file. If you enable ShowSpeakerLabels in your request, you must also include
    MaxSpeakerLabels. For more information, see Partitioning speakers (diarization)."""

    max_speaker_labels: Optional[int] = Field(default=UNSET, alias="MaxSpeakerLabels")
    """Specify the maximum number of speakers you want to partition in your media. Note that if your media contains more
    speakers than the specified number, multiple speakers are treated as a single speaker. If you specify the
    MaxSpeakerLabels field, you must set the ShowSpeakerLabels field to true."""

    channel_identification: Optional[bool] = Field(default=UNSET, alias="ChannelIdentification")
    """Enables channel identification in multi-channel audio. Channel identification transcribes the audio on each
    channel independently, then appends the output for each channel into one transcript. For more information, see
    Transcribing multi-channel audio."""

    vocabulary_name: Optional[str] = Field(default=UNSET, alias="VocabularyName")
    """The name of the custom vocabulary you want to include in your Medical Scribe request. Custom vocabulary names are
    case sensitive."""

    vocabulary_filter_name: Optional[str] = Field(default=UNSET, alias="VocabularyFilterName")
    """The name of the custom vocabulary filter you want to include in your Medical Scribe request. Custom vocabulary
    filter names are case sensitive. Note that if you include VocabularyFilterName in your request, you must also
    include VocabularyFilterMethod."""

    vocabulary_filter_method: Optional[VocabularyFilterMethodOrStr] = Field(
        default=UNSET, alias="VocabularyFilterMethod"
    )
    """Specify how you want your custom vocabulary filter applied to your transcript. To replace words with ***, choose
    mask. To delete words, choose remove. To flag words without changing them, choose tag."""

    clinical_note_generation_settings: Optional[ClinicalNoteGenerationSettings] = Field(
        default=UNSET, alias="ClinicalNoteGenerationSettings"
    )


class MedicalScribeSettingsDict(TypedDict):
    show_speaker_labels: NotRequired[bool]
    max_speaker_labels: NotRequired[int]
    channel_identification: NotRequired[bool]
    vocabulary_name: NotRequired[str]
    vocabulary_filter_name: NotRequired[str]
    vocabulary_filter_method: NotRequired[VocabularyFilterMethodOrStr]
    clinical_note_generation_settings: NotRequired[ClinicalNoteGenerationSettingsDict]
