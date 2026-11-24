from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.mapping_model import MappingModelOrStr
from .enums.tense_mapping import TenseMappingOrStr
from .enums.tone_mapping import ToneMappingOrStr


class ApiV1RephraseRequest(SdkBaseModel):
    key: Optional[str] = UNSET
    """Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are sent, the body key
    takes precedence over the header."""

    mapping: Optional[MappingModelOrStr] = UNSET
    """Transformation to apply. Defaults to "paraphrase"."""

    num_results: Optional[int] = UNSET
    """Number of alternatives to return (default 5)."""

    return_usage: bool = False
    """When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable
    character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is
    included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window
    are still counted here even though they are not re-charged, so the number is an upper bound on the final charge.
    Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing
    usage field (such as account/status or completion token usage) is preserved unchanged."""

    tense_mapping: Optional[TenseMappingOrStr] = UNSET
    """Target tense. Only used with mapping="switch_tense"."""

    text: str
    """The text to process. Plain text or HTML (tags are handled server-side)."""

    tone_mapping: Optional[ToneMappingOrStr] = UNSET
    """Target tone. Only used with mapping="switch_tone"."""


class ApiV1RephraseRequestDict(TypedDict):
    key: NotRequired[str]
    mapping: NotRequired[MappingModelOrStr]
    num_results: NotRequired[int]
    return_usage: NotRequired[bool]
    tense_mapping: NotRequired[TenseMappingOrStr]
    text: str
    tone_mapping: NotRequired[ToneMappingOrStr]
