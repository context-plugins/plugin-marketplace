from __future__ import annotations

from typing import TypeAlias

Prompt: TypeAlias = str | list[str]
"""The prompt to send to ChatGPT, or an array of up to 5 prompts for a multi-turn conversation. With an array, ChatGPT
answers the prompts in order, in the same conversation, and ``result`` is an array with one response for each prompt.
Each prompt after the first costs +1 credit (`pricing </guides/providers#chatgpt-additional-features>`__)."""

PromptDict: TypeAlias = str | list[str]
