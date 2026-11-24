from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.language_code_amazon_transcribe_service_medical_vocabulary_api import (
    LanguageCodeAmazonTranscribeServiceMedicalVocabularyApiOrStr,
)
from .tag_model import TagModel, TagModelDict


class CreateMedicalVocabularyRequest(SdkBaseModel):
    vocabulary_name: str = Field(alias="VocabularyName")
    """A unique name, chosen by you, for your new custom medical vocabulary. This name is case sensitive, cannot contain
    spaces, and must be unique within an Amazon Web Services account. If you try to create a new custom medical
    vocabulary with the same name as an existing custom medical vocabulary, you get a ConflictException error."""

    language_code: LanguageCodeAmazonTranscribeServiceMedicalVocabularyApiOrStr = Field(alias="LanguageCode")
    """The language code that represents the language of the entries in your custom vocabulary. US English (en-US) is
    the only language supported with Amazon Transcribe Medical."""

    vocabulary_file_uri: str = Field(alias="VocabularyFileUri")
    """The Amazon S3 location (URI) of the text file that contains your custom medical vocabulary. The URI must be in
    the same Amazon Web Services Region as the resource you're calling. Here's an example URI path:
    s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt"""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """Adds one or more custom tags, each in the form of a key:value pair, to a new custom medical vocabulary at the
    time you create this new custom vocabulary. To learn more about using tags with Amazon Transcribe, refer to Tagging
    resources."""


class CreateMedicalVocabularyRequestDict(TypedDict):
    vocabulary_name: str
    language_code: LanguageCodeAmazonTranscribeServiceMedicalVocabularyApiOrStr
    vocabulary_file_uri: str
    tags: NotRequired[list[TagModelDict]]
