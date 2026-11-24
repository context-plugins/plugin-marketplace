from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.language_code4 import LanguageCode4OrStr


class UpdateMedicalVocabularyRequest(SdkBaseModel):
    vocabulary_name: str = Field(alias="VocabularyName")
    """The name of the custom medical vocabulary you want to update. Custom medical vocabulary names are case
    sensitive."""

    language_code: LanguageCode4OrStr = Field(alias="LanguageCode")
    """The language code that represents the language of the entries in the custom vocabulary you want to update. US
    English (en-US) is the only language supported with Amazon Transcribe Medical."""

    vocabulary_file_uri: str = Field(alias="VocabularyFileUri")
    """The Amazon S3 location of the text file that contains your custom medical vocabulary. The URI must be located in
    the same Amazon Web Services Region as the resource you're calling. Here's an example URI path:
    s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt"""


class UpdateMedicalVocabularyRequestDict(TypedDict):
    vocabulary_name: str
    language_code: LanguageCode4OrStr
    vocabulary_file_uri: str
