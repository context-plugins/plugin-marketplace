from __future__ import annotations

from typing import TypeAlias

from ..response_input_message import ResponseInputMessage, ResponseInputMessageDict

Input1ParallelAiResponsesApi: TypeAlias = str | list[ResponseInputMessage]
"""The input to generate a response for: a plain string, or a list of role/content messages that includes at least one
``user`` message. Must be non-empty, and only text content is supported. ``input`` and ``instructions`` together may
total at most 20,000 characters."""

Input1ParallelAiResponsesApiDict: TypeAlias = str | list[ResponseInputMessageDict]
