from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .input_config import InputConfig, InputConfigDict
from .output_config2 import OutputConfig2, OutputConfig2Dict
from .translate_text_glossary_config import TranslateTextGlossaryConfig, TranslateTextGlossaryConfigDict


class BatchTranslateTextRequest(SdkBaseModel):
    """The batch translation request."""

    output_config: Optional[OutputConfig2] = Field(default=UNSET, alias="outputConfig")
    """Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't
    generate output for duplicate inputs."""

    source_language_code: Optional[str] = Field(default=UNSET, alias="sourceLanguageCode")
    """Required. Source language code. Supported language codes are listed in `Language Support
    <https://cloud.google.com/translate/docs/languages>`__."""

    models: Optional[dict[str, str]] = UNSET
    """Optional. The models to use for translation. Map's key is target language code. Map's value is model name. Value
    can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML
    Translation models: ``projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`` - General
    (built-in) models: ``projects/{project-number-or-id}/locations/{location-id}/models/general/nmt``, If the map is
    empty or a specific model is not requested for a language pair, then default google model (nmt) is used."""

    target_language_codes: Optional[list[str]] = Field(default=UNSET, alias="targetLanguageCodes")
    """Required. Specify up to 10 language codes here. Supported language codes are listed in `Language Support
    <https://cloud.google.com/translate/docs/languages>`__."""

    glossaries: Optional[dict[str, TranslateTextGlossaryConfig]] = UNSET
    """Optional. Glossaries to be applied for translation. It's keyed by target language code."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63
    characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes.
    International characters are allowed. Label values are optional. Label keys must start with a letter. See
    https://cloud.google.com/translate/docs/advanced/labels for more information."""

    input_configs: Optional[list[InputConfig]] = Field(default=UNSET, alias="inputConfigs")
    """Required. Input configurations. The total number of files matched should be <= 100. The total content size should
    be <= 100M Unicode codepoints. The files must use UTF-8 encoding."""


class BatchTranslateTextRequestDict(TypedDict):
    output_config: NotRequired[OutputConfig2Dict]
    source_language_code: NotRequired[str]
    models: NotRequired[dict[str, str]]
    target_language_codes: NotRequired[list[str]]
    glossaries: NotRequired[dict[str, TranslateTextGlossaryConfigDict]]
    labels: NotRequired[dict[str, str]]
    input_configs: NotRequired[list[InputConfigDict]]
