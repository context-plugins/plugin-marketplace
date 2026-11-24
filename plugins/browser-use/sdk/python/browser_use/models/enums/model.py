from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Model(str, Enum):
    """bu-ultrafast and bu-fast are early-access ultrafast presets; they take no modelParams and are rejected for
    projects without access."""

    MIMO_V2_6_PRO = "mimo-v2.6-pro"
    MIMO_V2_6_FLASH = "mimo-v2.6-flash"
    DEEPSEEK_V4_1_FLASH = "deepseek-v4.1-flash"
    GLM_5_2 = "glm-5.2"
    GROK_4_5 = "grok-4.5"
    GROK_4_6 = "grok-4.6"
    GLM_5_3_FLASH = "glm-5.3-flash"
    DEEPSEEK_V4_FLASH_VISION = "deepseek-v4-flash-vision"
    KIMI_K3 = "kimi-k3"
    MINIMAX_M3 = "minimax-m3"
    CLAUDE_OPUS_4_7 = "claude-opus-4.7"
    CLAUDE_OPUS_4_8 = "claude-opus-4.8"
    CLAUDE_OPUS_5 = "claude-opus-5"
    CLAUDE_OPUS_5_5 = "claude-opus-5-5"
    CLAUDE_FABLE_5 = "claude-fable-5"
    CLAUDE_SONNET_5 = "claude-sonnet-5"
    CLAUDE_SONNET_5_5 = "claude-sonnet-5-5"
    GPT_5_5 = "gpt-5.5"
    GPT_5_6 = "gpt-5.6"
    GPT_6_ASTRA = "gpt-6-astra"
    GPT_6_SOL = "gpt-6-sol"
    GPT_6_1_SOL = "gpt-6.1-sol"
    GPT_6_LUNA = "gpt-6-luna"
    GPT_5_6_SOL = "gpt-5.6-sol"
    GPT_5_6_TERRA = "gpt-5.6-terra"
    GPT_5_6_LUNA = "gpt-5.6-luna"
    GEMINI_3_6_FLASH = "gemini-3.6-flash"
    GEMINI_3_5_FLASH = "gemini-3.5-flash"
    GEMINI_3_1_PRO = "gemini-3.1-pro"
    GEMINI_3_FLASH = "gemini-3-flash"
    BU_ULTRAFAST = "bu-ultrafast"
    BU_FAST = "bu-fast"

    __str__ = str.__str__


ModelOrStr: TypeAlias = Annotated[Model | str, open_enum_validator(Model)]
