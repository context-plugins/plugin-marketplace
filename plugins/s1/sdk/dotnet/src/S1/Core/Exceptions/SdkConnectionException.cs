using System;

namespace S1.Core.Exceptions;

public class SdkConnectionException(string message, Exception? innerException = null)
    : SdkException(message, innerException);
