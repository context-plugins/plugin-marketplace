from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FormSettingsEnvelope(SdkBaseModel):
    settings: Any
    """A partial FormSettings patch (see @usefillo/core FormSettings): booleans such as notifyEmailIncludeAnswers,
    sendReceipt, saveProgress, draftAnswersVisible, resumeEmails, and draftDigest; strings such as notifyEmail,
    notifyEmailReplyToField, and resumeUrl; an array notifyEmailAnswerFields; and objects such as responseLimit and
    trust. Any key set to null is cleared. Six of the keys are not operational settings but part of the form's
    definition — submitMode, submitLabel, successTitle, successMessage, redirectUrl, and showProgress live inside the
    form schema: patching any of them additionally requires forms:write, and code-managed forms reject them outright."""


class FormSettingsEnvelopeDict(TypedDict):
    settings: Any
